var path = require('path');

var Person = require(path.join(__dirname, 'person'));
var logger = require(path.join(__dirname, 'logger'));

var me = new Person({ firstName:'Paul', lastName:'Millar', age:104,  knowsKungFu:true });

logger.info(me.toString());