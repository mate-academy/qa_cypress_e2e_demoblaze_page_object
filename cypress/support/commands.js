import HomePage from './pages/home';
import ProductPage from './pages/product';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkout';

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

Cypress.Commands.add('visitPage', () => {
  homePage.visit();
});

Cypress.Commands.add('goToLaptops', () => {
  homePage.clickLaptops();
});

Cypress.Commands.add('addProductToCart', (productName) => {
  homePage.selectProduct(productName);
  cy.on('window:alert', (txt) => {
    expect(txt).to.contains('Product added');
  });
  productPage.addToCart();
});

Cypress.Commands.add('goToCart', () => {
  cartPage.openCart();
});

Cypress.Commands.add('placeOrder', () => {
  cartPage.placeOrder();
});

Cypress.Commands.add('fillOrderForm', (formData) => {
  checkoutPage.fillForm(formData);
});

Cypress.Commands.add('purchaseOrder', ({ name, card }) => {
  checkoutPage.purchase();
  checkoutPage.assertModalData(name, card);
  checkoutPage.confirm();
});
