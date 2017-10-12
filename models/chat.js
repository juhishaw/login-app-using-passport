var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//Chat Schema
var ChatSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    chirp: {
        type: String
    }
});
var Chat = module.exports = mongoose.model('Chat', ChatSchema);


module.exports.createChirp = function(newChat, callback){
   
}