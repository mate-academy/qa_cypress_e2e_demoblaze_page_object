/// <reference types='cypress' />
import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import PageObject from '../support/PageObject'
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const contactForm = new ContactFormPageObject();

describe('DemoBlaze', () => {
  before(() => {
    cy.viewport(1920, 1080);
  });

  it('allow to visit Home page', () => {
    homePage.visit();
  });

  it('allow to click on the "Laptops"', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
  });

  it('allow to click on "Sony vaio i7"', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
  });

  it('allow to click on [Add to cart]', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
  });
 it('allow to click on "Cart"', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('td').should('contain', 'Sony vaio i7');
  });

  it('allow to click on [Place order]', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('td').should('contain', 'Sony vaio i7');
    homePage.clickOnButton2('Place Order');
  });

  it('allow to Fill all fields', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('td').should('contain', 'Sony vaio i7');
    homePage.clickOnButton2('Place Order');
    cy.get('#name').type('User');
    cy.get('#country').type('Ukraine');
    cy.get('#city').type('Kharkiv');
    cy.get('#card').type('067076');
    cy.get('#month').type('July');
    cy.get('#year').type('2023');
  });

  it('allow to click on [Purchase]', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('td').should('contain', 'Sony vaio i7');
    homePage.clickOnButton2('Place Order');
    cy.get('#name').type('User');
    cy.get('#country').type('Ukraine');
    cy.get('#city').type('Kharkiv');
    cy.get('#card').type('067076');
    cy.get('#month').type('July');
    cy.get('#year').type('2023');
    homePage.clickOnButton3('Purchase');
  });

  it('allow to click on [OK]', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton1('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('td').should('contain', 'Sony vaio i7');
    homePage.clickOnButton2('Place Order');
    cy.get('#name').type('User');
    cy.get('#country').type('Ukraine');
    cy.get('#city').type('Kharkiv');
    cy.get('#card').type('067076');
    cy.get('#month').type('July');
    cy.get('#year').type('2023');
    homePage.clickOnButton3('Purchase');
    homePage.clickOnButton3('OK');
  });
});
