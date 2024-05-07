/// <reference types='cypress' />
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject
  from '../support/pages/productPage.pageObject.js';
import CartObject
  from '../support/pages/cart.pageObject.js';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cart = new CartObject();
let testUser = {};

describe('Full purchase', () => {
  before(() => {
    homePage.visit();
    cy.task('generateUser').then((newUser) => {
      testUser = newUser;
    });
  });

  it('should let user proceed through with purchase', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    cy.get('h2.name')
      .should('contain', 'Sony vaio i7');
    productPage.addToCart();
    productPage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.contains('tr', 'Sony vaio i7')
      .should('exist');
    cart.placeOrder();
    cart.fillForm(testUser);
    cy.get('p.lead')
      .should('contain', testUser.name)
      .and('contain', testUser.card);
    cy.contains('button', 'OK')
      .click();
    cy.reload();
    cy.contains('tr', 'Sony vaio i7')
      .should('not.exist');
  });
});
