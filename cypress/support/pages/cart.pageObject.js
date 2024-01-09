import PageObject from "../PageObject";

class CartPageObject extends PageObject {
  url = '/cart.html';

  get productsTitle () {
    return cy.get('td');
  }
  assertProductInTheCart(product) {
    this.productsTitle.should('contain', product);
  }
  get clickOnPlaceOrder() {
    return cy.get('button').contains('Place Order')
  }
  clickPlaceOrder() {
    this.clickOnPlaceOrder.click();
  }
  get nameField() {
    return cy.get('#name');
  }
  fillNameField(username) {
    this.nameField.type(username);
  }
  get countryField() {
    return cy.get('#country')
  }
  fillCountryField(country) {
    this.countryField.type(country);
  }
  get cityField () {
    return cy.get('#city');
  }
  fillCityField(city) {
    this.cityField.type(city);
  }
  get creditCardField() {
    return cy.get('#card')
  }
  fillCreditCardField(card) {
    this.creditCardField.type(card);
  }
  get monthField() {
    return cy.get('#month');
  }
  fillMonthField(month) {
    this.monthField.type(month);
  }
   get yearField() {
     return cy.get('#year');
   }
   fillYearField(year) {
     this.yearField.type(year);
   }
   get purchaseButton() {
    return cy.get('button').contains('Purchase');
   }
   clickOnPurchaseButton() {
    this.purchaseButton.click();
   }
   get modal () {
    return cy.get('.lead');
   }
   assertModalContainsUsername(username) {
    this.modal.should('contain', username)
   }
   assertModalContainsCard(card) {
    this.modal.should('contain', card)
   }
   get okButton() {
    return cy.get('button').contains('OK');
   }
   clickOnOkButton() {
    this.okButton.click();
   }
 }
export default CartPageObject;