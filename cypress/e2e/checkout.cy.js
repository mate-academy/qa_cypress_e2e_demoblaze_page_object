import HomeAndCataloguePageObject from '@pages/homeCatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import faker from 'faker';
const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

const testData = {
  name: faker.name.findName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.finance.creditCardMonth(),
  year: faker.finance.creditCardYear(),
  productName: 'Sony vaio i7',
  successMessage: 'Product added'
};

describe('Shopping Cart', () => {
  before(() => {
    homePage.visit();
  });

  it('', () => {
  it('should allow a user to add a product to the cart', () => {
    homePage.clickOnLaptops();
    homePage.clickOnProduct(testData.productName);
    homePage.addToCart();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains(testData.successMessage);
    });

    homePage.clickOnCart();
    cartPage.assertProductInCart(testData.productName);

    cartPage.clickOnPlaceOrder();
    cartPage.fillOrderDetails(
      testData.name,
      testData.country,
      testData.city,
      testData.creditCard,
      testData.month,
      testData.year
    );
    cartPage.clickOnPurchase();

    cartPage.assertModalData(
      testData.name,
      testData.country,
      testData.city,
      testData.creditCard,
      testData.month,
      testData.year
    );
    cartPage.clickOnOk();
  });
});
});

