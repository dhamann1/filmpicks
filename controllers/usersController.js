var User = require('../models/User');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function signup(req, res) {
  var user = new User(req.body);
  user.save()
    .then(user => {
      res.json({
        token: createJWT(user)
      });
    })
    // User data invalid (prob duplicate email)
    .catch(err => {
      res.status(400).json(err)
    });
}

function login(req, res) {
  User.findOne({
    email: req.body.email
  }).exec().then(user => {
    if (!user) return res.status(401).json({
      err: 'bad credentials'
    });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        var token = createJWT(user);
        res.json({
          token
        });
      } else {
        return res.status(401).json({
          err: 'bad credentials'
        });
      }
    });
  }).catch(err => {
    res.status(401).json(err)
  });
}


function userProfile(req, res) {
  console.log('hey')
}


function like(req, res) {
  console.log(req.body.user._id);
  User.findOne({
    _id: req.body.user._id
  }, (err, user) => {
    console.log('a')
    if (!user.favoriteMovies.some(movie => movie.movieID === req.body.movieID)) {
      console.log('b')
      user.favoriteMovies.push({
        movieTitle: req.body.movieTitle,
        movieID: req.body.movieID,
        image: req.body.image
      })
      user.save(err, data => {
        if (err) {
          res.status(500).json(err)
        }
        console.log('c')
        res.status(200).json(data)
      })
    } else {
      res.status(400).json({error: 'Already saved to wishlist'})
    }
  })
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign({
      user
    }, // data payload
    SECRET, {
      expiresIn: '24h'
    }
  );
}

module.exports = {
  signup,
  login,
  userProfile,
  like
};
