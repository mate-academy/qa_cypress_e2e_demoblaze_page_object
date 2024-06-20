/// <reference types='cypress' />
import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';

const contactForm = new ContactFormPageObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.name.firstName(),
  addedProductMessage: 'Product added',
  country: faker.random.word(),
  city: faker.random.word(),
  cart: faker.phone.phoneNumber('##########'),
  month: faker.date.month(),
  year: Math.floor(2000 + Math.random() * 20)
};
describe('e2e Demoblaze', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to buy a product', () => {
    homePage.clickOnCategory('Laptop');
    homePage.clickOnProduct('Sony vaio i7');
    cy.contains('a', 'Add to cart').click();
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(testData.addedProductMessage);
    });
    homePage.clickOnLink('Cart');
    cy.get('.table-responsive')
      .should('contain', 'Sony vaio i7');
    cy.contains('.btn', 'Place Order')
      .click();
    contactForm.typeName(testData.name);
    contactForm.typeCountry(testData.country);
    contactForm.typeCity(testData.city);
    contactForm.typeCard(testData.cart);
    contactForm.typeMonth(testData.month);
    contactForm.typeYear(testData.year);
    cy.contains('.btn', 'Purchase')
      .click();
    cy.contains('.sweet-alert', 'Thank you for your purchase!')
      .should('be.visible');
  });
});
