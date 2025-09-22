import HomePage from '../support/pages/homeCatalogue.pageObject';
import CartPage from '../support/pages/cart.pageObject';
import CheckoutPage from '../support/pages/checkout.pageObject';

describe('Demoblaze checkout flow', () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  const orderData = {
    name: 'John Doe',
    country: 'USA',
    city: 'New York',
    creditCard: '1234567890123456',
    month: '12',
    year: '2025'
  };

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com');
  });

  it('should allow user to place an order', () => {
    homePage
      .clickOnCategory('Laptops')
      .clickOnProduct('Sony vaio i7')
      .clickOnAddToCart();

    cy.on('window:alert', (txt) => {
      expect(txt).to.eq('Product added.');
    });

    cartPage
      .openCart()
      .getProductInCart('Sony vaio i7')
      .should('be.visible')
      .placeOrder();

    checkoutPage
      .fillOrderForm(
        orderData.name,
        orderData.country,
        orderData.city,
        orderData.creditCard,
        orderData.month,
        orderData.year
      )
      .purchase();

    // Assertions for purchase modal
    cy.contains('Thank you for your purchase!').should('be.visible');
    cy.contains(`Name: ${orderData.name}`).should('be.visible');
    cy.contains(`Credit Card: ${orderData.creditCard}`).should('be.visible');

    checkoutPage.closeModal();
  });
});
