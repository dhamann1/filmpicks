var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var commentSchema = new Schema ({
    text: String,
    movieID: String, 
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    
});


module.exports = mongoose.model('Movie', movieSchema);