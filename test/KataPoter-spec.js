var Basket = require('../src/Basket.js').Basket;
var Book = require('../src/Book.js').Book;

describe('KataPoter', function() {
  var basket;
  
  beforeEach(function() {
    basket = new Basket();
  });

  it('an empty basket book costs 0', function() {
    expect(basket.price()).toBe(0);
  });

  it('A basket with 1 book costs 8 €', function() {
    var firstBook = new Book("First book");
    basket.addBook(firstBook);
    expect(basket.price()).toBe(8);
  });
  
  it('A basket with 2 same books costs 16 €', function() {
    var firstBook = new Book("First book");
    basket.addBook(firstBook);
    basket.addBook(firstBook);
    expect(basket.price()).toBe(16);
  });
  
  it('A basket with 2 different books does not cost 16 €', function() {
    var firstBook = new Book("First book");
    var secondBook = new Book("Second book");
    basket.addBook(firstBook);
    basket.addBook(secondBook);
    expect(basket.price()).not.toBe(16);
  });
  
});
