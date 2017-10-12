var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Chat = require('../models/chat');

router.post('/chat', function(req,res){
   
    var username = req.body.username;
   var chirp = req.body.chirp;
   
    if(errors){
       res.render('index', {
           errors: errors
       });
    }
    else{
        var newChat = new Chat({
            username: username,
            chirp: chirp
        });
        Chat.createChirp(newChat, function(err, chirp){
            if(err) throw err;
            console.log(chirp);
        });
        
        req.flash('success_msg', 'You Chirped!');
        res.redirect('/users/index'); 
    }
});

module.exports = router;