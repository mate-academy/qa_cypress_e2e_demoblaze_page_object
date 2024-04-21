import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

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

  assertProductAdded(productName) {
    cy.get('#tbodyid').should('contain.text', productName);
  }

  clickOnBtn(name) {
    cy.contains('.btn', name).click();
  }

  assertCustomerInfo(name, creditCard) {
    cy.get('.lead')
      .should('contain', creditCard)
      .should('contain', name);
  }
}

export default CartPageObject;
