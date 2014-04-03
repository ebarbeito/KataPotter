function Basket() {
  this.numBooks = 0;
}

Basket.prototype.addBook = function() {
  this.numBooks++;
};

Basket.prototype.price = function() {
  return this.numBooks * 8;
};

module.exports.Basket = Basket;
