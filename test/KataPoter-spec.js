var Basket = require('../src/Basket.js').Basket;
var Book = require('../src/Book.js').Book;

describe('KataPoter', function() {

  it('an empty basket book costs 0', function() {
    var basket = new Basket();
    expect(basket.price()).toBe(0);
  });

  it('A basket with 1 book costs 8 €', function() {
    var basket = new Basket();
    var firstBook = new Book("First book");
    basket.addBook(firstBook);
    expect(basket.price()).toBe(8);
  });
});
