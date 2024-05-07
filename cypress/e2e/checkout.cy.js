// <reference types='cypress' />

describe('page test', () => {
  before(() => {
    cy.visit('/');
  });

  it('test adding the laptop to the cart and placing the order', () => {
    cy.contains('Laptops').click();
    cy.contains('Sony vaio i7').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });
    cy.contains('Cart').click();
    cy.contains('Sony vaio i7');
    cy.get('.col-lg-1 > .btn').click();
    cy.get('#name').type('Ozzy O');
    cy.get('#country').type('United Kingdom');
    cy.get('#city').type('Birmingham');
    cy.get('#card').type('1234-5678-9876-5432');
    cy.get('#month').type('12');
    cy.get('#year').type('2030');
    cy.contains('Purchase').click();
    cy.get('.sweet-alert')
      .should('be.visible')
      .and('contain', 'Thank you for your purchase!')
      .and('contain', 'Id: ')
      .and('contain', 'Amount: 790 USD')
      .and('contain', 'Card Number: 1234-5678-9876-5432')
      .and('contain', 'Name: Ozzy O')
      .and('contain', 'Date: 03/12/2030');
    cy.get('.confirm').click();
  });
});
