var logger = require('./logger');

function Point(x, y){
    this.x = x; 
    this.y = y;
}

Point.prototype.print = function(){
    logger.info('X: ' + this.x + ' - Y: ' + this.y);
}

module.exports = Point;