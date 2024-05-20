import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/productPage.pageObject';
import CartPageObject from '../support/pages/cartPage.pageObject';

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
const successModalMessage = 'Thank you for your purchase!';

describe('Demoblaze', () => {
  let user;

  beforeEach(() => {
    homePage.visit();
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
    productPage.clickAddBtn();

    productPage.assertAllert(successAddMessage);
    homePage.clickOnLink(testData.link);
    cartPage.assertProduct.should('contain', testData.product);
    cartPage.clickOrderBtn();

    cartPage.nameField.type(user.username);
    cartPage.countryField.type(user.country);
    cartPage.cityField.type(user.city);
    cartPage.creditCardField.type(user.creditCard);
    cartPage.monthField.type(user.month);
    cartPage.yearField.type(user.year);
    cartPage.clickPurchaseBtn();

    cartPage.confirmMessage.should('contain', successModalMessage);
    cartPage.nameAssert.should('contain', user.username);
    cartPage.cardNumberAssert.should('contain', user.creditCard);
    cartPage.clickOkBtn();
  });
});
