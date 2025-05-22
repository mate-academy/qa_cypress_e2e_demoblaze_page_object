export class CartPage {
  get firstProduct() {
    return cy.get('.success > :nth-child(2)');
  }

  get modal() {
    return cy.get('#orderModal');
  }

  get modalTitle() {
    return cy.get('.sweet-alert > h2');
  }

  get nameInput() {
    return cy.get('#name');
  }

  get countryInput() {
    return cy.get('#country');
  }

  get cityInput() {
    return cy.get('#city');
  }

  get monthInput() {
    return cy.get('#month');
  }

  get yearInput() {
    return cy.get('#year');
  }

  get cardInput() {
    return cy.get('#card');
  }

  // city credit card mouth, year

  get city() {}

  clickCheckOut() {
    cy.get('.col-lg-1 > .btn').click();
  }

  clickModalSubmit() {
    cy.get(
      '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    ).click();
  }

  clickModalConfirm() {
    cy.get('.confirm').click();
  }
}
