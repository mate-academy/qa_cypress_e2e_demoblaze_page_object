/// <reference types='cypress' />

// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/product.PageObject';
import CartPageObject from '../support/pages/cart.PageObject';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

describe('Purchase flow', () => {
  let testData;

  before(() => {
    homePage.visit();
    cy.task('generateTestData').then((generateTestData) => {
      testData = generateTestData;
    });
  });

  it('should allow to add product to the cart and purchase', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.clickOnAddBtn();

    productPage.assertAlert('Product added');

    homePage.clickOnLink('Cart');

    cartPage.addedProduct('Sony vaio i7');

    cartPage.clickOnPlaceOrderBtn();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cartPage.typeName(testData.name);
    cartPage.typeCountry(testData.country);
    cartPage.typeCity(testData.city);
    cartPage.typeCard(testData.card);
    cartPage.typeMonth(testData.month);
    cartPage.typeYear(testData.year);
    cartPage.clickOnPurchaseBtn();

    cartPage.assertEnteredData(testData.card, testData.name);
    cartPage.clickOnOkBtn();
  });
});
