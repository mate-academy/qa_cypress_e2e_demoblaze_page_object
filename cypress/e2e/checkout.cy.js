import ProductPage from '../support/pages/product';
import CartPage from '../support/pages/cart';
import CheckoutPage from '../support/pages/checkout';

describe('Demoblaze Checkout Flow', () => {
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  it('should complete a purchase flow', () => {
    // Visit homepage
    cy.visit('https://www.demoblaze.com');

    // Select product
    cy.contains('Laptops').click();
    productPage.selectProduct('Sony vaio i7');

    // Add to cart and assert alert
    productPage.assertAlert('Product added');
    productPage.addToCart();

    // Go to cart and assert product
    cartPage.openCart();
    cartPage.assertProduct('Sony vaio i7');

    // Place order
    cartPage.placeOrder();
    checkoutPage.fillForm({
      name: 'John Doe',
      country: 'USA',
      city: 'New York',
      card: '1234567890123456',
      month: '10',
      year: '2025'
    });

    // Purchase and assert modal
    checkoutPage.purchase();
    checkoutPage.assertModalData('John Doe', '1234567890123456');
    checkoutPage.confirm();
  });
});
