/// <reference types='cypress' />
import faker from 'faker';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';

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
    homePage.addToCart('Add to cart');

    cy.on('window:alert', (alert) => {
      expect(alert).to.equal(`Product added`);
    });

    homePage.cartMenu('Cart');

    cy.get('.success > :nth-child(2)').should('contain', 'Sony vaio i7');

    homePage.placeOrder('Place Order');
    homePage.typeName(testData.name);
    homePage.typeCountry(testData.country);
    homePage.typeCity(testData.city);
    homePage.typeCard(testData.card);
    homePage.typeYear(testData.year);
    homePage.typeMonth(testData.month);
    homePage.click('Purchase');

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get('.sweet-alert > h2')
      .should('contain', 'Thank you for your purchase!');
    homePage.clickOk('OK');
  });
});
