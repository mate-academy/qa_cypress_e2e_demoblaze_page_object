/// <reference types='cypress' />

const name1 = 'Carl Johnson';
const country = 'USA';
const city = 'Los Santos';
const card = '6666 6666 6666 6666';
const month = '6';
const year = '1993';

describe('Demoblaze checkout flow', () => {
  before(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('should successfully complete the checkout flow', () => {
    cy.contains('Laptops').click();
    cy.contains('Sony vaio i7').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.eq('Product added');
    });

    cy.get('#cartur').click();
    cy.get('#tbodyid').should('contain', 'Sony vaio i7');
    cy.contains('Place Order').click();

    cy.get('#name').type(name1);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);

    cy.contains('Purchase').click();

    cy.get('.sweet-alert').should('be.visible').and('contain', name1);
    cy.get('.sweet-alert').should('contain', card);
    cy.get('.sweet-alert').should('contain', '790 USD');

    cy.contains('OK').click();
  });
});
