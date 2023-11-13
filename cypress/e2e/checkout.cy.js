import CheckoutPageObject from '../support/pages/checkout.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const checkout = new CheckoutPageObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  email: faker.internet.email(),
  name: faker.name.firstName(),
  city: faker.address.city(),
  successMessage: 'Product added',
  country: faker.address.country(),
  month: faker.date.month(),
  purchaseMessage: 'Thank you for your purchase!',
  cardNumber: faker.finance.creditCardNumber(),
  year: faker.date.past().getFullYear(),
};


describe('Contact', () => {
  before(() => {
    homePage.visit();
  });

  it('should be able to buy the product', () => {
    homePage.clickOnLink('Home');
    homePage.clickOnCategory('Laptop');
    homePage.clickOnProduct('Sonyi7');
    homePage.clickAddProduct('addToCart');


    checkout.assertAllert(testData.successMessage);
    cy.on('window:alert', (str) => {
      expect(str).to.contains(testData.successMessage);
    });


    homePage.clickOnLinkCart('Cart');
    cy.get('.col-lg-8')
      .should('contain', 'Sony vaio i7');

    homePage.clickOnPlaceOrder('PlaceOrder')

    checkout.typeName(testData.name),
    checkout.typeCountry(testData.country),
    checkout.typeCity(testData.city),
    checkout.typeCard(testData.cardNumber),
    checkout.typeMonth(testData.month),
    checkout.typeYear(testData.year),
    homePage.clickOnPurchase('Purchase')

    checkout.assertAllert(testData.purchaseMessage);
    cy.on('window:alert', (str) => {
      expect(str).to.contains(testData.purchaseMessage);
    });
    cy.on('window:confirm', () => true);

    cy.contains('.sweet-alert', testData.purchaseMessage)
      .should('be.visible');
    
    homePage.clickOnOk('OK')

  });
});