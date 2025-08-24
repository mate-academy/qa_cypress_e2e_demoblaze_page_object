/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import PageObject from '../support/PageObject';

const homePage = new HomeAndCataloguePageObject();
const page = new PageObject();

describe('Demoblaze - checkout flow', () => {
  before(() => {
    homePage.visit();
  });

  it('Powinien zrealizować zamówienie przy użyciu POM', () => {
    homePage.clickOnCategory('Laptops');

    homePage.clickOnProduct('Sony vaio i7');

    cy.contains('Add to cart').click();
    page.assertAllert('Product added.');

    cy.contains('Cart').click();
    cy.get('tbody tr').contains('Sony vaio i7').should('exist');

    cy.contains('Place Order').click();

    cy.get('#name').type('Jan Kowalski');
    cy.get('#country').type('Polska');
    cy.get('#city').type('Warszawa');
    cy.get('#card').type('1234567890123456');
    cy.get('#month').type('08');
    cy.get('#year').type('2025');

    cy.contains('Purchase').click();
    cy.get('.sweet-alert').should('contain.text', 'Jan Kowalski');

    cy.contains('OK').click();
  });
});
