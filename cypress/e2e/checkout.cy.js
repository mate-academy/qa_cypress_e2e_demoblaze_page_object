import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import PurchaseFormPageObject from '../support/pages/PurchaseForm.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const purchaseForm = new PurchaseFormPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.cityName(),
  credit: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future(5)
};

describe('Place order form', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to purchase the product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnBtn('Add to cart');
    cy.on('window:alert', (str) => {
      expect(str).to.eq(`Product added`);
    });
    homePage.clickOnLink('Cart');
    cy.get('.success').should('contain', 'Sony vaio i7');
    homePage.clickOnBtn('Place Order');
    // Fill the form
    purchaseForm.typeName(testData.name);
    purchaseForm.typeCountry(testData.country);
    purchaseForm.typeCity(testData.city);
    purchaseForm.typeCredit(testData.credit);
    purchaseForm.typeMonth(testData.month);
    // Convert to Date object
    const dateObject = new Date(testData.year);
    // Extract only the year
    // eslint-disable-next-line max-len
    const yearOnly = dateObject.toLocaleDateString('en-US', { year: 'numeric' });
    purchaseForm.typeYear(yearOnly);
    purchaseForm.clickOnPurchaseBtn();
    // Check data displayed in the order confirmation alert
    cy.get('.sweet-alert').should('be.visible');
    cy.get('.lead').should('contain', testData.name);
    cy.get('.lead').should('contain', testData.credit);
    homePage.clickOnBtn('OK');
  });
});
