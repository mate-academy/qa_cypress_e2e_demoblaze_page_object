import PageObject from '../PageObject';
class CartPageObject extends PageObject {
  findProductInCart(productName) {
    cy.get('.success').should('contain', productName);
  }

  Btn(text) {
    cy.contains('.btn', text)
      .click();
  }

  get NameInput() {
    return cy.findById('name');
  }

  get CountryInput() {
    return cy.findById('country');
  }

  get CityInput() {
    return cy.findById('city');
  }

  get CreditCardInput() {
    return cy.findById('card');
  }

  get MonthInput() {
    return cy.findById('month');
  }

  get YearInput() {
    return cy.findById('year');
  }

  OrderInformation(input) {
    cy.get('.lead ').should('contain', input);
  }

  get OkBtn() {
    return cy.get('.confirm');
  }
}

export default CartPageObject;
