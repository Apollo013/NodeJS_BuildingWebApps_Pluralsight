var udsr = require('underscore');

var Person = function(details){
    udsr.extend(this, { knowsKungFu: false }, details);    
}

Person.prototype.toString = function(){
    return this.firstName + ' ' + this.lastName + ' => Age: ' + this.age + ' - knowsKungFu: ' + this.knowsKungFu;
}

module.exports = Person;
