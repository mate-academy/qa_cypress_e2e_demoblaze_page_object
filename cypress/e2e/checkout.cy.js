import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const contactForm = new ContactFormPageObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  email: faker.internet.email(),
  name: faker.name.firstName(),
  city: faker.random.words(),
  successMessage: 'Product added',
  country: faker.random.words(),
  month: faker.random.word(),
  purchaseMessage: 'Thank you for your purchase!'

};

describe('Contact', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to send feedback', () => {
    homePage.clickOnLink('Home');
    homePage.clickOnCategory('Laptop');
    homePage.clickOnProduct('Sonyi7');
    homePage.clickAddProduct('addToCart');


    contactForm.assertAllert(testData.successMessage);
    cy.on('window:alert', (str) => {
      expect(str).to.contains('Product added');
    });
    cy.on('window:confirm', () => true);

    homePage.clickOnLinkCart('Cart');
    cy.get('.col-lg-8')
      .should('contain', 'Sony vaio i7');

    homePage.clickOnPlaceOrder('PlaceOrder')

    const cartNumber = '1452 3654 7852 1590'

    cy.get('#name')
     .type(testData.name);
    cy.get('#country')
      .type(testData.country);
    cy.get('#city')
      .type(testData.city);
    cy.get('#card')
      .type(cartNumber);
    cy.get('#month')
      .type(testData.month);
    cy.get('#year')
      .type('1994');
    homePage.clickOnPurchase('Purchase')

    contactForm.assertAllert(testData.purchaseMessage);
    cy.on('window:alert', (str) => {
      expect(str).to.contains('Thank you for your purchase!');
    });
    cy.on('window:confirm', () => true);
    
    homePage.clickOnOk('OK')

  });
});