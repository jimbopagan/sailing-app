var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fishingSchema = new Schema({
    state: String,
    fishType: String,
    description: String,
    location: {
        type: String,
        unique: true,
        lowercase: true
    },
    stars: {
        type: Number,
        min: 0,
        max: 5,
        "default": 0
    },
   postedBy: {
       type: Schema.Types.ObjectId,
       ref: "User"
   }
});

module.exports = mongoose.model('Hole', fishingSchema);
