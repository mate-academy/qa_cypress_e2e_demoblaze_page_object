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

  it('allow to visit Home page', () => {
    homePage.visit();
  });

  it('able to click on the "Laptops"', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
  });

  it('allow to click on "Sony vaio i7"', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
  });

  it('able to click on [Add to cart]', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
  });

  it('able to click on "Cart"', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('td').should('contain', 'Sony vaio i7');
  });

  it('able to click on [Place order]', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('td').should('contain', 'Sony vaio i7');
    homePage.clickOnButton2('Place Order');
  });

  it('able to fill all fields', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('td').should('contain', 'Sony vaio i7');
    homePage.clickOnButton2('Place Order');
    cy.get('#name').type('Anna');
    cy.get('#country').type('Ukraine');
    cy.get('#city').type('Kyiv');
    cy.get('#card').type('55667');
    cy.get('#month').type('january');
    cy.get('#year').type('2024');
  });

  it('able to click on [Purchase]', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('td').should('contain', 'Sony vaio i7');
    homePage.clickOnButton2('Place Order');
    cy.get('#name').type('Anna');
    cy.get('#country').type('Ukraine');
    cy.get('#city').type('Kyiv');
    cy.get('#card').type('55667');
    cy.get('#month').type('january');
    cy.get('#year').type('2024');
    homePage.clickOnButton3('Purchase');
  });

  it('able to click on [OK]', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('td').should('contain', 'Sony vaio i7');
    homePage.clickOnButton2('Place Order');
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
