/// <reference types='cypress' />

describe('Demoblaze Checkout Flow', () => {
  before(() => {
    // Visit the homepage before starting the test
    cy.visit('https://www.demoblaze.com/');
  });

  it('should successfully complete the checkout flow', () => {
    // Click on the "Laptops" category
    cy.contains('Laptops').click();

    // Click on "Sony vaio i7"
    cy.contains('Sony vaio i7').click();

    // Click on [Add to cart] and assert the alert message
    cy.contains('Add to cart').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.eq('Product added');
    });

    // Click on "Cart"
    cy.contains('Cart').click();

    // Assert the product is in the cart
    cy.get('#tbodyid').should('contain', 'Sony vaio i7');

    // Click on [Place Order]
    cy.contains('Place Order').click();

    // Fill all fields in the form
    cy.get('#name').type('John Doe');
    cy.get('#country').type('USA');
    cy.get('#city').type('New York');
    cy.get('#card').type('4111111111111111');
    cy.get('#month').type('12');
    cy.get('#year').type('2025');

    // Click on [Purchase]
    cy.contains('Purchase').click();

    // Assert entered data is shown on the modal
    cy.get('.sweet-alert').should('be.visible').and('contain', 'John Doe');
    cy.get('.sweet-alert').should('contain', '4111111111111111');

    // Click on [Ok]
    cy.contains('OK').click();
  });
});
