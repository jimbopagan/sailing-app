var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    // password: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     lowercase: true,
    //     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/, 'Please fill a valid email address']
    // },
    phone: Number,
//    launchTime: [{
//        description: String,
//        takeOffTime: type: Date, default: Date.now
//    }],
    admin: {
        type: Boolean,
        default: false
    },
    // userHoles: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Hole"
    // }]
});

module.exports = mongoose.model('User', userSchema);
