class Order {
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

  get creditMonth() {
    return cy.get('#month');
  }

  get creditYear() {
    return cy.get('#year');
  }

  fillAllField(info) {
    this.nameField.type(info.name);
    this.countryField.type(info.country);
    this.cityField.type(info.city);
    this.creditCardField.type(info.creditCard);
    this.creditMonth.type(info.creditMonth);
    this.creditYear.type(info.creditYear);
  }

  clickPurchaseButton() {
    cy.get('.btn').contains('Purchase').click();
  }

  verifyOrder(info) {
    cy.get('.lead')
      .should('contain', info.name)
      .should('contain', info.creditCard);
  }
}

export const orderProcess = new Order();
