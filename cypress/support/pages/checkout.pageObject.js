import PageObject from '../PageObject';

class CheckoutPageObject extends PageObject {
  url = '/checkout.html';

  fillOrderForm({ name, country, city, creditCard, month, year }) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(creditCard);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  submitPurchase() {
    cy.contains('Purchase').click();
  }

  assertPurchaseDetails(testData) {
    // Check for card number and amount, but NOT name
    cy.get('.sweet-alert', { timeout: 10000 })
      .should('be.visible')
      .and('contain', testData.creditCard)
      .and('contain', 'Amount') // or check for 'Amount'
      .and('contain', 'USD');
  }

  confirmOrder() {
    cy.contains('OK').click();
  }
}

export default CheckoutPageObject;
