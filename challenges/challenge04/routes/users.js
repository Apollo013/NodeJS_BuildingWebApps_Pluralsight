var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var User = require(path.join('../', 'models', 'user-model.js'))
//var Post = require('./Post')

//var users = new Users();

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find(function(err, users){
        res.render('users', { users:users });
    });  
});

/* GET user by id */
router.get('/new', function(req, res) {
    res.render('new');
});

/* GET user by id */
router.get('/:userid', function(req, res) {
    User.find({user: req.params.userid}, function(err, user){
        res.send(user);
    });  
});

/* Post */
router.post('/create', function(req, res){
    var user = new User({
        name: req.body.name
    });

    user.save(function(err, model){
        if(err){
            res.send(500, err);
        }
        else {
            res.redirect('/users');
        }
    });
});


module.exports = router;
