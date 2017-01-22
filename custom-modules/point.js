
function Point(x, y){
    this.x = x; 
    this.y = y;
}

Point.prototype.print = function(){
    console.log('X: ' + this.x + ' - Y: ' + this.y);
}

module.exports = Point;