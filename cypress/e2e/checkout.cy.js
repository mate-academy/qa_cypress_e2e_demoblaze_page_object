import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import PageObject from '../support/PageObject'
import faker from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const contactForm = new ContactFormPageObject();

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
    cy.get('#name').type('Anna');
    cy.get('#country').type('Ukraine');
    cy.get('#city').type('Kyiv');
    cy.get('#card').type('55667');
    cy.get('#month').type('january');
    cy.get('#year').type('2024');
    homePage.clickOnButton3('Purchase');
    homePage.clickOnButton4('OK');
  });
});
