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
    2: 0.05,
    3: 0.1
  };
  var price = this.numBooks * 8;
  var discount = 0;
  var numBooks = numDifferentBooks(this.books);
  if (numBooks > 1) {
    discount = differentBookDiscounts[numBooks] * 8 * numBooks;
  }
  return price - discount;
};

var numDifferentBooks = function(books) {
  return Object.keys(books).length;
};

module.exports.Basket = Basket;
