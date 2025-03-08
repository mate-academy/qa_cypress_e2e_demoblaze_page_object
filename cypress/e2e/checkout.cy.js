/// <reference types='cypress' />
import CheckoutFormPageObject
  from '../support/pages/checkoutForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';

const checkoutPage = new CheckoutFormPageObject();
const homePage = new HomeAndCataloguePageObject();
const card = '0000000000000000';

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card,
  month: '12',
  year: '2023'
};

describe('Demoblaze app', () => {
  before(() => {
    homePage.visit();
  });

  it('should add a product to the cart and place the order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    cy.contains('.btn', 'Add to cart')
      .click();
    cy.on('window:alert', (str) => {
      expect(str).to.contains('Product added');
    });

    homePage.clickOnLink('Cart');

    cy.get('#tbodyid')
      .should('contain', 'Sony vaio i7');
    cy.contains('.btn', 'Place Order')
      .click();

    checkoutPage.typeName(testData.name);
    checkoutPage.typeCountry(testData.country);
    checkoutPage.typeCity(testData.city);
    checkoutPage.typeCard(card);
    checkoutPage.typeMonth(testData.month);
    checkoutPage.typeYear(testData.year);

    cy.contains('.btn', 'Purchase')
      .click();

    cy.contains('.sweet-alert', 'Thank you for your purchase!')
      .should('contain', card);
    cy.contains('.btn', 'OK')
      .click();
  });
});
