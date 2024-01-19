/// <reference types='cypress' />
import faker from 'faker';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject.js';

const homePage = new HomeAndCataloguePageObject();
const testData = {
  name: faker.name.firstName(),
  country: faker.random.words(),
  city: faker.random.words(),
  card: faker.finance.creditCardNumber(),
  year: 2023,
  month: 12
};

describe('Product store', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  // eslint-disable-next-line max-len
  it('should have an ability to add product to the card and make checkout', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickaddToCartButton();
    homePage.alertProduct('Product added');
    homePage.openCart();
    homePage.addedProduct('Sony vaio i7');
    homePage.clickPlaceOrderButton('Place Order');
    homePage.typeName(testData.name);
    homePage.typeCountry(testData.country);
    homePage.typeCity(testData.city);
    homePage.typeCard(testData.card);
    homePage.typeYear(testData.year);
    homePage.typeMonth(testData.month);
    homePage.clickPurchaseButton();
    homePage.thankAlert();
    homePage.clickButton('OK');
  });
});
