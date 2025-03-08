import PageObject from '../PageObject';

class OrderForm extends PageObject {
  url = '/index.html/cart';

  get nameField() {
    return cy.get('#name');
  }

  get countryField() {
    return cy.get('#country');
  }

  get cityField() {
    return cy.get('#city');
  }

  get cCardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get closeBtn() {
    return cy.contains('.btn', 'Close');
  }

  get okBtn() {
    return cy.contains('.btn', 'OK');
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

  typeCreditCard(creditCard) {
    this.cCardField.type(creditCard, { force: true });
  }

  typeMonth(month) {
    this.monthField.type(month, { force: true });
  }

  typeYear(year) {
    this.yearField.type(year, { force: true });
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }

  clickOnCloseBtn() {
    this.closeBtn.click();
  }

  clickOnOkBtn() {
    this.okBtn.click();
  }

  assertModalData(fieldValue) {
    cy.get('.lead')
      .contains(fieldValue)
      .should('exist');
  }
}

export default OrderForm;
