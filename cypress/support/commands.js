// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('selectCategory', (category) => {
  cy.contains(category).click();
});

Cypress.Commands.add('selectProduct', (productName) => {
  cy.contains(productName).click();
});

Cypress.Commands.add('addToCartAndVerify', () => {
  cy.contains('Add to cart').click();
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Product added.');
  });
});

Cypress.Commands.add('goToCart', () => {
  cy.get('#cartur').click();
});

Cypress.Commands.add('verifyProductInCart', (productName) => {
  cy.get('.success td:nth-child(2)').should('contain', productName);
});

Cypress.Commands.add('placeOrderAndFill', (data) => {
  cy.contains('Place Order').click();
  cy.get('#name').type(data.name);
  cy.get('#country').type(data.country);
  cy.get('#city').type(data.city);
  cy.get('#card').type(data.card);
  cy.get('#month').type(data.month);
  cy.get('#year').type(data.year);
});

Cypress.Commands.add('purchaseAndVerify', (data) => {
  cy.contains('Purchase').click();
  cy.get('.sweet-alert').should('contain', data.name).and('contain', data.card);
  cy.contains('OK').click();
});
