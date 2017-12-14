var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var movieSchema = new Schema ({
    movieTitle: String, 
    movieID: Number,
    image: String, 
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    
});


module.exports = mongoose.model('Movie', movieSchema);
