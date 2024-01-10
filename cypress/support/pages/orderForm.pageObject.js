import PageObject from '../PageObject';

class OrderFormPageObject extends PageObject {
  url = '/cart.html';

  get nameField() {
    return cy.get('#name');
  }

  get countyField() {
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

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get purchaseAlert() {
    return cy.contains('.sweet-alert', 'Thank you for your purchase!');
  }

  typeName(name) {
    this.nameField.type(name);
  }

  typeCountry(country) {
    this.countyField.type(country);
  }

  typeCity(city) {
    this.cityField.type(city);
  }

  typeCard(card) {
    this.cardField.type(card);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typeYear(year) {
    this.yearField.type(year);
  }

  clickPurchaseBtn() {
    this.purchaseBtn.click();
  }

  clickPlaceOrderBtn() {
    this.placeOrderBtn.click();
  }
}

export default OrderFormPageObject;
