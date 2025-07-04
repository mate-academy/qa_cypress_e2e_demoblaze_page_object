export default class CartPageObject {
  url = '/cart.html';

  verifyCartItem(productName) {
    cy.get('.success>td:first').next().should('contain', productName);
  }

  verifyProductPrice(price) {
    cy.get('.success>td:last').prev().should('contain', price);
  }

  verifyCartTotal(total) {
    cy.get('#totalp').should('contain', total);
  }

  clickOnPlaceOrderButton() {
    cy.get('[data-target="#orderModal"]').contains('Place Order').click();
  }

  fillOrderDetails(name, country, city, card, month, year) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  clickOnPurchaseButton() {
    cy.get('.btn-primary').contains('Purchase').click();
  }

  assertAlert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }
}
