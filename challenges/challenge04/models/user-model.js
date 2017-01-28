var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
//mongoose.connect('mongodb://127.0.0.1:mydb');
mongoose.connect("mongodb://127.0.0.1/mydb");
var usersSchema = new mongoose.Schema({
    name: String
});

var User = mongoose.model('users', usersSchema);

module.exports = User;
