import CartPageObject from '../support/pages/cart.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';

/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

const testData = {
  category: 'Laptops',
  product: 'Sony vaio i7',
  link: 'Cart'
};

const successAddMessage = 'Product added';
const successOrderMessage = 'Thank you for your purchase!';

describe('Demoblaze', () => {
  let user;
  before(() => {
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('should provide the ability to buy product', () => {
    homePage.visit();
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
    productPage.clickAddBtn();
    productPage.assertAllert(successAddMessage);
    homePage.clickOnLink(testData.link);
    cartPage.productAssert.should('contain', testData.product);
    cartPage.clickOrderBtn();
    cartPage.nameField.type(user.username);
    cartPage.countryField.type(user.country);
    cartPage.cityField.type(user.city);
    cartPage.creditCardField.type(user.creditCard);
    cartPage.monthField.type(user.month);
    cartPage.yearField.type(user.year);
    cartPage.clickPurchaseBtn();
    cartPage.orderAssert.should('contain', successOrderMessage);
    cartPage.nameAssert.should('contain', user.username);
    cartPage.cardNumberAssert.should('contain', user.creditCard);
    cartPage.clickOkBtn();
  });
});
