var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var movieSchema = new Schema ({
    display_title: String,
    critics_pick: Number,
    headline: String,
    summary_short: String,
    publication_date: String, 
    link: {},
    multimedia: {},
    postId: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});


module.exports = mongoose.model('Movie', movieSchema);
