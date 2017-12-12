var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var postSchema = new Schema ({
    text: String,
    display_title: String, 
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    
});


module.exports = mongoose.model('Movie', movieSchema);