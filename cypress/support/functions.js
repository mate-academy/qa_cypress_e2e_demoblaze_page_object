/// <reference types='cypress' />

function listOfElements() {
  return {
    homeUrl: '/index.html',
    laptops: 'Laptops',
    sonyVaioI7: 'Sony vaio i7',
    productUrl: '/prod.html',
    productAddedAlert: 'Product added',
    cartLink: 'Cart',
    addToCart: 'Add to cart',
    cartUrl: '/cart.html',
    placeOrder: 'Place Order',
    field: {
      name: '#name',
      country: '#country',
      city: '#city',
      creditCard: '#card',
      month: '#month',
      year: '#year'
    },
    ok: 'OK',
    purchase: 'Purchase'
  };
}

module.exports = {
  listOfElements
};
