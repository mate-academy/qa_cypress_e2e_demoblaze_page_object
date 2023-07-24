/// <reference types='cypress' />
// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

describe('Checkout of laptop purchase', () => {
  let testData;
  const successMessage = 'Thank you for your purchase!';

  before(() => {
    homePage.visit();
    cy.task('generateTestData').then((generateTestData) => {
      testData = generateTestData;
    });
  });

  it('should allow add product to the cart', () => {
    homePage.clickOnCategory('Laptop');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.addToCartBtn();

    productPage.allertMessage('Product added');

    homePage.clickOnLink('Cart');

    cartPage.containProduct('Sony vaio i7');
    cartPage.clickOnPlaceOrderBtn();

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);

    cartPage.fillName(testData.name);
    cartPage.fillCountry(testData.country);
    cartPage.fillCity(testData.city);
    cartPage.fillCard(testData.card);
    cartPage.fillMonth(testData.month);
    cartPage.fillYear(testData.year);
    cartPage.clickOnPurchaseBtn();
    // eslint-disable-next-line max-len
    cartPage.assertSuccessPurchase(testData.card, testData.name, successMessage);
    cartPage.clickOnOkBtn();
  });
});
