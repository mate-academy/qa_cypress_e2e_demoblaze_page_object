import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  get nameField() {
    return cy.get('#name');
  }

  get countryField() {
    return cy.get('#country');
  }

  get cityField() {
    return cy.get('#city');
  }

  get creaditCardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  clickOkBtn() {
    cy.contains('.confirm', 'OK').click();
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCountry(country) {
    this.countryField.type(country, { force: true });
  }

  typeCity(city) {
    this.cityField.type(city, { force: true });
  }

  typeCard(card) {
    this.creaditCardField.type(card, { force: true });
  }

  typeMonth(month) {
    this.monthField.type(month, { force: true });
  }

  typeYear(year) {
    this.yearField.type(year, { force: true });
  }

  assertProductInCart(product) {
    cy.contains('.success', product)
      .should('contain', product);
  }

  assertCardNumber(cardNumber) {
    cy.get('.lead')
      .should('contain', cardNumber);
  }

  assertName(name) {
    cy.get('.lead')
      .should('contain', name);
  }
}

export default CartPageObject;
