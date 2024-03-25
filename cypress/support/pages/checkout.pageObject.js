export class CheckoutPageObject {
  visit() {
    cy.visit('/');
  }

  get customerName() {
    return cy.get('#name');
  }

  get customerCountry() {
    return cy.get('#country');
  }

  get customerCity() {
    return cy.get('#city');
  }

  get customerCard() {
    return cy.get('#card');
  }

  get customerMonthOfBirth() {
    return cy.get('#month');
  }

  get customerYearOfBirth() {
    return cy.get('#year');
  }

  get purchaseButton() {
    return cy.get('.btn.btn-primary').contains('Purchase');
  }

  get confirmationButton() {
    return cy.get('[class="confirm btn btn-lg btn-primary"]');
  }

  fillCustomerData(customer) {
    this.customerName.type(customer.firstName);
    this.customerCountry.type(customer.country);
    this.customerCity.type(customer.city);
    this.customerCard.type(customer.creditCard);
    this.customerMonthOfBirth.type(customer.monthOfBirth);
    this.customerYearOfBirth.type(customer.yearOfBirth);
  }

  purchase() {
    this.purchaseButton.click();
  }

  verifyPurchaseConfirmation(customer) {
    cy.get('.lead.text-muted ').should('contain', customer.creditCard);
    cy.get('.lead.text-muted ').should('contain', customer.firstName);
    this.confirmationButton.click();
  }
}
