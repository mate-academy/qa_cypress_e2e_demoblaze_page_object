/// <reference types='cypress' />
// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/productPageObject';
import CartPageObject from '../support/pages/cartPageObject';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

describe('Demoblaze site', () => {
  let testData;
  before(() => {
    homePage.visit();
    cy.task('placeOrder').then((placeOrder) => {
      testData = placeOrder;
    });
  });

  it('should allow to add the product to the cart', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.addToCartBtn();
    productPage.allertMessage('Product added');
    homePage.clickOnLink('Cart');
    cartPage.cartProduct('Sony vaio i7');
    cartPage.orderBtn();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cartPage.addName(testData.name);
    cartPage.addCountry(testData.country);
    cartPage.addCity(testData.city);
    cartPage.addCard(testData.card);
    cartPage.addMonth(testData.month);
    cartPage.addYear(testData.randomYear);
    cartPage.purchaseBtn();
    // eslint-disable-next-line max-len
    cartPage.successMessage(testData.card, testData.name, testData.successMessage);
    cartPage.okButton();
  });
});
