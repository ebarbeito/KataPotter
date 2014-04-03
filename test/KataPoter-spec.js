describe('KataPoter', function() {
  
  it('an empty basket book costs 0', function() {
    var basket = new Basket();
    expect(basket.price).toBe(0);    
  });
  
});
