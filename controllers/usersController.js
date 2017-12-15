var User = require('../models/user');
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
  User.findOne({_id: req.body.user._id}, (err, user) => {
    if (!user.favoriteMovies.some(movie => movie.movieID === req.body.movieID)) {
      user.favoriteMovies.push({movieTitle: req.body.movieTitle, movieID: req.body.movieID, image: req.body.image})
      user.save(err, data => {
        if (err) {
          res.status(500).json(err)
        }
        res.status(200).json(data)
      })
    }
  })
}


function findFavorites(req, res){
  console.log('Hello');
  console.log(req.user);
  console.log(res.json(req.user.favoriteMovies));
  res.json(req.user.favoriteMovies)
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
  like,
  findFavorites
};
