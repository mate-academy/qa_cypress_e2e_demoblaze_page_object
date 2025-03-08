/// <reference types='cypress' />

describe('', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should add product in product cart', () => {
    cy.get(`[onclick="byCat('notebook')"]`).click()
    cy.get('h4').contains('Sony vaio i7').click()
    cy.get('.btn').contains('Add to cart').click()
    cy.on('window:confirm', (alert) => {
      expect(alert).to.equal('Product added');
      return true;
    });
    cy.get('#cartur').click()
    cy.get('.success').should('contain.text', 'Sony vaio i7')
    cy.get('.btn-success').click()
    cy.get('[id="name"]').type('Name')
    cy.get('[id="country"]').type('Country')
    cy.get('[id="city"]').type('City')
    cy.get('[id="card"]').type('777')
    cy.get('[id="year"]').type('1998')
    cy.get('[onclick="purchaseOrder()"]').click()
    cy.get('.lead').should('contain.text', 'Name')
    cy.get('.confirm').click()
  });
});
