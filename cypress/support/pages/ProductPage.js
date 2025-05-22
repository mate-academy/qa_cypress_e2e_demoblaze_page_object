/// <reference types='cypress' />

export class ProductPage {

    get productName() {
        return cy.get('.name');
    }
  clickBuyButton() {
    cy.get(".col-sm-12 > .btn").click();
  }
}
