/// <reference types='cypress' />

describe('Checkout Flow', () => {
  const productName = 'Sony vaio i7';
  const orderData = {
    name: 'Jan Kowalski',
    country: 'Polska',
    city: 'Warszawa',
    card: '1234-5678-9012-3456',
    month: '06',
    year: '2025'
  };

  it('should complete purchase flow', () => {
    cy.visit('https://www.demoblaze.com/');

    cy.selectCategory('Laptops');
    cy.selectProduct(productName);
    cy.addToCartAndVerify();

    cy.goToCart();
    cy.verifyProductInCart(productName);

    cy.placeOrderAndFill(orderData);
    cy.purchaseAndVerify(orderData);
  });
});
