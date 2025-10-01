import HomePage from './pages/home';
import ProductPage from './pages/product';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkout';

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

// Visit home page
Cypress.Commands.add('visitPage', () => {
  homePage.visit();
});

// Navigate to Laptops
Cypress.Commands.add('goToLaptops', () => {
  homePage.clickLaptops();
});

// Add specific product to cart
Cypress.Commands.add('addProductToCart', (productName) => {
  homePage.selectProduct(productName);
  cy.on('window:alert', (txt) => {
    expect(txt).to.contains('Product added');
  });
  productPage.addToCart();
});

// Go to cart
Cypress.Commands.add('goToCart', () => {
  cartPage.openCart();
});

// Place order
Cypress.Commands.add('placeOrder', () => {
  cartPage.placeOrder();
});

// Fill order form
Cypress.Commands.add('fillOrderForm', (formData) => {
  checkoutPage.fillForm(formData);
});

// Purchase and assert modal
Cypress.Commands.add('purchaseOrder', ({ name, card }) => {
  checkoutPage.purchase();
  checkoutPage.assertModalData(name, card);
  checkoutPage.confirm();
});
