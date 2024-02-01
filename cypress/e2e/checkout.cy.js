/// <reference types='cypress' ///

describe('E-commerce Website Test', () => {
  before(() => {
    cy.visit('/');
  });

  it('Should add a Sony Vaio i7 laptop to the cart and place an order', () => {
    cy.contains('Laptops').click();
    cy.contains('Sony vaio i7').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
    cy.contains('Cart').click();
    cy.contains('Sony vaio i7');
    cy.get('.col-lg-1 > .btn').click();
    cy.get('#name').type('John Doe');
    cy.get('#country').type('United States');
    cy.get('#city').type('New York');
    cy.get('#card').type('1234-5678-9876-5432');
    cy.get('#month').type('12');
    cy.get('#year').type('2025');
    cy.contains('Purchase').click();
    cy.get('.sweet-alert').should('contain', 'Thank you for your purchase!');
    cy.get('.sweet-alert').should('contain', 'Id: ');
    cy.get('.sweet-alert').should('contain', 'Amount: 790 USD');
    cy.get('.sweet-alert')
      .should('contain', 'Card Number: 1234-5678-9876-5432');

    cy.get('.sweet-alert').should('contain', 'Name: John Doe');
    cy.get('.sweet-alert').should('contain', 'Date: 18/8/2023');
    cy.get('.confirm').click();
  });
});
