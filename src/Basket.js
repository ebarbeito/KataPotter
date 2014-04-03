function Basket() {
  this.books = [];
}

Basket.prototype.addBook = function(book) {
  this.books.push(book);
};

Basket.prototype.price = function() {
  var price = this.books.length * 8;
  if (this.books.length === 2 &&
    this.books[0].title !== this.books[1].title
    ) {
    price = 15.2;
  }
  return price;
};

module.exports.Basket = Basket;
