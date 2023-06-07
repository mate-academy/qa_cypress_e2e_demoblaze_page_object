import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';
  
  get listOfProducts() {
    return cy.get('#tbodyid');
  }

  clickOnBtn(btnName) {
    cy.contains('.btn', btnName)
      .click();
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

  get cardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  get modalSucces() {
    return cy.get('.sweet-alert');
  }

}
  
export default CartPageObject;