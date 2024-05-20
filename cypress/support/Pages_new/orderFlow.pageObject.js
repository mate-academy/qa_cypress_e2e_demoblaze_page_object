class OrderFlowPage {
  clickOrderButton() {
    cy.get('.btn').contains('Place Order').click();
  }

  get nameField() {
    return cy.get('#name');
  }

  get countryField() {
    return cy.get('#country');
  }

  get cityField() {
    return cy.get('#city');
  }

  get creditCardField() {
    return cy.get('#card');
  }

  get creditMonthField() {
    return cy.get('#month');
  }

  get creditYearField() {
    return cy.get('#year');
  }

  fillAllFields(info) {
    this.nameField.type(info.name + '{enter}');
    this.countryField.type(info.country);
    this.cityField.type(info.city);
    this.creditCardField.type(info.creditCard);
    this.creditMonthField.type(info.creditMonth);
    this.creditYearField.type(info.creditYear);
  }

  clickPurchaseButton() {
    cy.get('.btn').contains('Purchase').click();
  }

  verifyOrder(user) {
    cy.get('.lead')
      .should('contain', user.name)
      .should('contain', user.creditCard);
  }
}

export const orderFlowPage = new OrderFlowPage();
