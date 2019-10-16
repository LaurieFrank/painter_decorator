const Decorator = function(){
  this.stock = [];
};

Decorator.prototype.addPaintCan = function(paintCan) {
  this.stock.push(paintCan);
};

Decorator.prototype.totalPaintLitres = function() {
  let total = 0;
  for (const paintCan of this.stock){
  total += paintCan.totalLitres;
  }

  return total;
};

Decorator.prototype.enoughPaint = function() {
  return this.totalPaintLitres >= room.area;
};




module.exports = Decorator;
