import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();
/// <reference types='cypress' />

describe('', () => {
  before(() => {
    homePage.visit();
  });

  it('', () => {
    homePage.clickOnLinkOther('Laptops');
    cy.get('.hrefch').contains('a', 'Sony vaio i7').click();
    cy.get('.col-sm-12 > .btn').click();
    cy.url().should('include', '#');
    cy.get('#cartur').click();
    cy.url().should('include', 'cart.html');
    cy.get('[data-target="#orderModal"').click();
    cy.get('#name').type('Roma');
    cy.get('#country').type('Uk');
    cy.get('#city').type('Lviv');
    cy.get('#card').type('12345678');
    cy.get('#month').type('September');
    cy.get('#year').type('2024');
    cy.get('[onclick="purchaseOrder()"]').click();
    cy.get('.confirm').click();
  });
});
