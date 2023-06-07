import PageObject from "../PageObject";

class CartPageObject extends PageObject {
  checkProduct (product) {
    cy.get('.success')
      .should('contain', product);
  }
  get name () {
    return cy.get('#name');
  }
  get country () {
    return cy.get('#country');
  }
  get city () {
    return cy.get('#city');
  }
  get card () {
    return cy.get('#card');
  }
  get month () {
    return cy.get('#month');
  }
  get year () {
    return cy.get('#year');
  }
  get purchase () {
    return cy.contains('.btn', 'Purchase');
  }
  checkProductInCart(name, card) {
    cy.get('.lead.text-muted')
      .should('contain', name)
      .and('contain', card)
  }
}

export default CartPageObject;
