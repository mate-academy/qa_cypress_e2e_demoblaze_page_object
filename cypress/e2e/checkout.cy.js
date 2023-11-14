import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

describe('Purchase', () => {
  let user;

  before(() => {
    homePage.visit();
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
  });

  it('should have the ability to make a purchase', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.clickOnAddToCart();
    productPage.getSuccessfulMessage('Product added');
    productPage.clickOnLink('Cart');
    cartPage.assertInCart('Sony vaio i7');
    cartPage.clickOnButton('Place Order');
    cartPage.fillInForm(user.username, user.country, user.city, user.card, user.month, user.year);
    cartPage.successAlert('Thank you for your purchase', user.card, user.username);
    cartPage.clickOnConfirmButton('OK');
  });
});
