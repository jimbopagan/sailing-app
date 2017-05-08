var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fishingSchema = new Schema({
    state: String,
    fishType: [{
        name: String,
        bestTime: String,
        description: String
    }],
    coordinates: String,
    stars: {
        type: Number,
        min: 0,
        max: 5,
        "default": 0
    },
   favoritedBy: [{
       type: Schema.Types.ObjectId,
       ref: "User"
   }]
});

module.exports = mongoose.model('Hole', fishingSchema);
