var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var movieSchema = new Schema ({
    movieTitle: String, 
    movieID: Number,
    image: String,     
});


module.exports = mongoose.model('Movie', movieSchema);
