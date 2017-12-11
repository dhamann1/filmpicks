var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var postSchema = new Schema ({
    text: String, 
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    movieId: { type: Schema.Types.ObjectId, ref: 'Movie' }, 
});


module.exports = mongoose.model('Movie', movieSchema);