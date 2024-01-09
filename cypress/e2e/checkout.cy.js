import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import PageObject from '../support/PageObject'
import faker from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month({ abbr: true }),
  year: faker.date.future().getFullYear(),
};

describe('DemoBlaze', () => {
  before(() => {
    cy.viewport(1920, 1080);
  });

  it('able to complete the entire flow, () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    homePage.assertProductInCart('Sony vaio i7');
    homePage.clickOnButton2('Place Order');
    cy.wait(5000);
    homePage.typeName(testData.name);
    homePage.typeCountry(testData.country);
    homePage.typeCity(testData.city);
    homePage.typeCard(testData.creditCard);
    homePage.typeMonth(testData.month);
    homePage.typeYear(testData.year);;
    homePage.clickOnButton3('Purchase');
    homePage.clickOnButton4('OK');
  });
});
