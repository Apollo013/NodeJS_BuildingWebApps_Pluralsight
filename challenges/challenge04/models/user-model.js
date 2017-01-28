var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/mydb");

var usersSchema = new mongoose.Schema({
    name: String
});

var User = mongoose.model('users', usersSchema);

module.exports = User;
