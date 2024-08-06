class OrderPage {
  get fillNameField() {
    return cy.get('#name');
  }

  get fillCountryField() {
    return cy.get('#country');
  }

  get fillCityField() {
    return cy.get('#city');
  }

  get fillCardField() {
    return cy.get('#card');
  }

  get fillMonthField() {
    return cy.get('#month');
  }

  get fillYearField() {
    return cy.get('#year');
  }

  clickPurchaseButton() {
    cy.get('button').contains('Purchase').click();
  }

  get assertOrder() {
    return cy.contains('Name');
  }

  clickOkButton() {
    cy.get('.confirm.btn.btn-lg.btn-primary').click();
  }
}

export default OrderPage;
