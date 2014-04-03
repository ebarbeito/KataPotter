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
    3: 0.1,
    4: 0.20
  };
  var price = this.numBooks * 8;
  var discount = 0;
  var localBooks = this.books;
  while (hasBooks(localBooks)) {
    var numBookOfPack = sizeOfPack(localBooks);
    if (numBookOfPack > 1) {
      discount += differentBookDiscounts[numBookOfPack] * 8 * numBookOfPack;
    }
    localBooks = removePack(localBooks);
  }
  return price - discount;
};

var hasBooks = function(books) {
  return sizeOfPack(books) > 0;
};

var removePack = function(books) {
  for (var title in books) {
    books[title]--;
    if (books[title] === 0) {
      delete books[title];
    }
  }
  return books;
};

var sizeOfPack = function(books) {
  return Object.keys(books).length;
};

module.exports.Basket = Basket;
