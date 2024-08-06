import CartPageObject from '../support/pages/cartPage.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';

/// <reference types='cypress' />
const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

const testData = {
  category: 'Laptops',
  product: 'Sony vaio i7',
  alertMessage: 'Product added',
  link: 'Cart',
  successMessage: 'Thank you for your purchase!'
};

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
    homePage.clickOnCart();
    homePage.assertAllert(testData.alertMessage);
    homePage.clickOnLink(testData.link);
    cartPage.assertProduct(testData.product);
    cartPage.clickOrderBtn();
    cartPage.fillTheNameField(user.username);
    cartPage.fillTheCountryField(user.country);
    cartPage.fillTheCityField(user.city);
    cartPage.fillTheCreditCardField(user.creditCard);
    cartPage.fillTheMonthField(user.month);
    cartPage.fillTheYearField(user.year);
    cartPage.clickPurchaseBtn();
    cartPage.assertOrderConfirmation(testData.successMessage);
    cartPage.assertName(user.username);
    cartPage.assertCardNumber(user.creditCard);
    cartPage.clickOkBtn();
  });
});
