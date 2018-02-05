var User = require('../models/user');
var jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

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


function like(req, res) {
  User.findOne({_id: req.body.user._id}, (err, user) => {
    if (!user.favoriteMovies.some(movie => movie.movieID === req.body.movieID)) {
      user.favoriteMovies.push({title: req.body.movieTitle, id: req.body.movieID, poster_path: req.body.image.slice(31)})
      user.save((err, data) => {
        if (err) {
          res.status(500).json(err)
        }
        res.status(200).json(data)
      })
    }
  })
}



// function deleteMovie(req, res) {
//   User.findOne({_id: req.body.user._id}, (err, user) => {
//     if (user.favoriteMovies.some(movie => movie.movieID === req.body.movieID)) {
//       user.favoriteMovies.remove(req.body.movieID)
//       user.save((err, data) => {
//         if (err) {
//           res.status(500).json(err)
//         }
//         res.status(200).json(data)
//       })
//     }
//   })
// }


function findFavorites(req, res){
  User.findById(req.user._id).then(user => res.json(user.favoriteMovies))
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
  like,
  findFavorites,
  deleteMovie
};
