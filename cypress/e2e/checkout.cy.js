/// <reference types='cypress' />

describe('', () => {
  before(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('Should add item to cart, and complete order', () => {
    cy.contains('a', 'Laptops').click();
    cy.contains('a', 'Sony vaio i7').click();

    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Product added');
      return true;
    });

    cy.contains('a', 'Add to cart').click();

    cy.contains('a', 'Cart').click();

    cy.get('table').should('exist');

    cy.get('table').contains('td', 'Sony vaio i7').should('exist');

    cy.contains('button', 'Place Order').click();

    cy.get('input[id="name"]').type('Kamil');

    cy.get('input[id="country"]').type('Poland');

    cy.get('input[id="city"]').type('Warsaw');

    cy.get('input[id="card"]').type('4111 1111 1111 1111');

    cy.get('input[id="month"]').type('12');

    cy.get('input[id="year"]').type('2027');

    cy.contains('button', 'Purchase').click();

    cy.contains('div.sweet-alert', 'Card Number: 4111 1111 1111 1111').should(
      'exist'
    );

    cy.contains('button', 'OK').click();
  });
});
