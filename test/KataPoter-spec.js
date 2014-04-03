var Basket = require('../src/Basket.js').Basket;
var Book = require('../src/Book.js').Book;

describe('Basket', function() {
  var basket;
  var firstBook;
  var secondBook;

  beforeEach(function() {
    basket = new Basket();
    firstBook = new Book("First book");
    secondBook = new Book("Second book");
  });

  describe('empty', function() {
    it('the price is 0 €', function() {
      expect(basket.price()).toBe(0);
    });
  });

  describe('when "first book" is added', function() {
    beforeEach(function() {
      basket.addBook(firstBook);
    });

    it('the price is 8 €', function() {
      expect(basket.price()).toBe(8);
    });
  });

  describe('when the basket has "first book" twice', function() {
    beforeEach(function() {
      basket.addBook(firstBook);
      basket.addBook(firstBook);
    });
    it('the price is 16 €', function() {
      expect(basket.price()).toBe(16);
    });
  });

  describe('when the basket has "first" and "second" books', function() {
    beforeEach(function() {
      basket.addBook(firstBook);
      basket.addBook(secondBook);
    });
    
    it('the price has a 5% discount (15.2 €)', function() {
      expect(basket.price()).toBe(15.2);
    });
  });

  describe('when the basket has "first", "second" and "third" books', function() {
    beforeEach(function() {
      thirdBook = new Book("Third book");
      basket.addBook(firstBook);
      basket.addBook(secondBook);
      basket.addBook(thirdBook);
    });
    
    it('the price has a 10% discount (21.6 €)', function() {
      expect(basket.price()).toBe(21.6);
    });
  });

});
