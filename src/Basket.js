function Basket() {
  this.books = [];
}

Basket.prototype.addBook = function(book) {
  this.books.push(book);
};

Basket.prototype.price = function() {
  var differentBookDiscounts = {
    2: 0.05,
    3: 0.1
  };
  var price = this.books.length * 8;
  var discount = 0;
  if (areDifferent(this.books)) {
    discount = differentBookDiscounts[this.books.length] * price;
  }
  return price - discount;
}
;

var areDifferent = function(books) {
  if (books.length > 1) {
    return books[0].title !== books[1].title;
  } else {
    return false;
  }

};

module.exports.Basket = Basket;
