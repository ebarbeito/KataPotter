function Basket() {
  this.books = {};
  this.numBooks = 0;
}

Basket.prototype.addBook = function(book) {
  if (!this.books[book.title]) {
    this.books[book.title] = 0;
  }
  this.books[book.title] += 1;
  this.numBooks++;
};

Basket.prototype.price = function() {
  var differentBookDiscounts = {
    0: 0,
    1: 0,
    2: 0.05,
    3: 0.1
  };
  var price = this.numBooks * 8;
  var discount = 0;
  if (areDifferent(this.books)) {
    discount = differentBookDiscounts[this.numBooks] * price;
  }
  return price - discount;
}
;

var areDifferent = function(books) {
  for (var title in books) {
    if (books[title] !== 1) {
      return false;
    }
  }
  return true;
};

module.exports.Basket = Basket;
