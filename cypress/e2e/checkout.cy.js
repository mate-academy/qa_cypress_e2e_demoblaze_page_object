/// <reference types='cypress' />
import { faker } from '@faker-js/faker';
// eslint-disable-next-line max-len
import { HomeAndCataloguePageObject, CheckoutFormPageObject } from '../support/pages/homeCatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();
const checkout = new CheckoutFormPageObject();

const testData = {
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  card: faker.finance.creditCardNumber(),
  month: new Date().toLocaleString('default', { month: 'long' }),
  year: new Date().getFullYear()
};
describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('Should correctly checkout the product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    cy.get('.btn-success').click();
    homePage.clickOnLink('Cart');
    cy.get('.btn-success').click();

    checkout.typeName(testData.name);
    checkout.typeCountry(testData.country);
    checkout.typeCity(testData.city);
    checkout.typeCredit(testData.card);
    checkout.typeMonth(testData.month);
    checkout.typeYear(testData.year);

    checkout.clickOnPurchaseBtn();

    cy.get('.confirm').click();
  });
});
