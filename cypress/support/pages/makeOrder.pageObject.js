class OrderPage {
  fillNameField() {
    cy.get('#name').type('Mariia');
  }

  fillCountryField() {
    cy.get('#country').type('Ukraine');
  }

  fillCityField() {
    cy.get('#city').type('Kyiv');
  }

  fillCardField() {
    cy.get('#card').type('5555444433332222');
  }

  fillMonthField() {
    cy.get('#month').type('07');
  }

  fillYearField() {
    cy.get('#year').type('2026');
  }

  clickPurchaseButton() {
    cy.get('button').contains('Purchase').click();
  }

  assertOrder() {
    cy.contains('Id').should('be.visible');
    cy.contains('Amount').should('be.visible');
    cy.contains('Card Number').should('be.visible');
  }

  clickOk() {
    cy.get('.confirm.btn.btn-lg.btn-primary').click();
  }
}

export default OrderPage;
