var Basket = require('../src/Basket.js').Basket;
var Book = require('../src/Book.js').Book;

describe('Basket', function() {
  var basket;

  beforeEach(function() {
    basket = new Basket();
  });
  describe('empty', function() {
    it('the price is 0 €', function() {
      expect(basket.price()).toBe(0);
    });
  });
  describe('when first book is added', function() {
    var firstBook;
    beforeEach(function() {
      firstBook = new Book("First book");
      basket.addBook(firstBook);

    });
    it('the price is 8 €', function() {
      expect(basket.price()).toBe(8);
    });
    describe('and the same book is added again', function() {
      beforeEach(function() {
        basket.addBook(firstBook);
      });
      it('the price is 16 €', function() {
        expect(basket.price()).toBe(16);
      });
    });

    describe('and a different books is added', function() {
      beforeEach(function() {
        var secondBook = new Book("Second book");
        basket.addBook(secondBook);

      });
      it('the price has a 5% discount (15.2 €)', function() {
        expect(basket.price()).toBe(15.2);
      });
    });

  });
});
