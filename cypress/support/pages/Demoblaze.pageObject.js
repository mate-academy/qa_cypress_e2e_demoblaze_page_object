import PageObject from "../PageObject"
import faker from 'faker';
import ContactFormPageObject from "./contactForm.pageObject";

export class CheckoutPageObject extends PageObject {
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

  get creditCardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  get makePurchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart');
  }

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  itemInCart(item) {
    cy.get('td').should('contain', item);
  }

  purchaseDone(alertMessage) {
    cy.get('.sweet-alert').should('contain', alertMessage);
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

  typeCard(creditCard) {
    this.creditCardField.type(creditCard, { force: true });
  }

  typeMonth(month) {
    this.monthField.type(month, { force: true });
  }

  typeYear(year) {
    this.yearField.type(year, { force: true });
  }

  clickOnaddToCartBtn() {
    this.addToCartBtn.click();
  }

  clickOnmakePurchaseBtn() {
    this.makePurchaseBtn.click();
  }

  clickOnplaceOrderBtn() {
    this.placeOrderBtn.click();
  }
}

export default CheckoutPageObject;
