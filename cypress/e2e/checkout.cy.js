import CheckoutFormPageObject from '../support/pages/checkoutForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const checkoutForm = new CheckoutFormPageObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: Math.floor(Math.random() * 10) + 2023
};

const modalMessage = 'Thank you for your purchase!';

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to checkout', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    cy.contains('.btn', 'Add to cart')
      .click();
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq('Product added');
    });
    homePage.clickOnLink('Cart');
    cy.get('#tbodyid')
      .should('contain', 'Sony vaio i7');
    cy.contains('.btn', 'Place Order')
      .click();

    checkoutForm.typeName(testData.name);
    checkoutForm.typeCountry(testData.country);
    checkoutForm.typeCity(testData.city);
    checkoutForm.typeCreditCard(testData.creditCard);
    checkoutForm.typeMonth(testData.month);
    checkoutForm.typeYear(testData.year);
    checkoutForm.clickOnPurchase();
    checkoutForm.assertModalMessage(modalMessage);
    checkoutForm.clickOnOk();
  });
});
