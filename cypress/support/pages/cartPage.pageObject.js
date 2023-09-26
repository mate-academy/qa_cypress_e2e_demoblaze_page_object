import PageObject from "../PageObject";

class CartPagePageObject extends PageObject {

  get addedProductContainer() {
    return cy.get('.success')
  }

  get placeOrderBtn() {
    return cy.get('[data-target="#orderModal"]');
  }

  get placeOrderHeader() {
    return cy.get('#orderModalLabel')
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

  get creditCardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  get purchaseBtn() {
    return cy.contains('.btn-primary', 'Purchase');
  }

  get totalInText() {
    return cy.get('#totalm');
  }

  get accertData() {
    return cy.get('.sweet-alert');
  }

  get okBtn() {
    return cy.get('.la-ball-fall');
  }

  checkThatProductIsAdded() {
    this.addedProductContainer.should('contain', 'Sony vaio i7');
  }

  clickOnPlaceOrderBtn() {
    this.placeOrderBtn.click();
  }

  checkPlaceOrderHeader() {
    this.placeOrderHeader.should('contain', 'Place order');
  }

  fillNameField(name) {
    this.nameField.type(name)
  }

  fillCountryField(country) {
    this.countryField.type(country);
  }

  fillCityField(city) {
    this.cityField.type(city);
  }

  fillCreditCardField(card) {
    this.creditCardField.type(card);
  }

  fillMonthField(month) {
    this.monthField.type(month);
  }

  fillYearField(year) {
    this.yearField.type(year);
  }

  fillPlaceOrderInfo(name, country, city, card, month, year) {
    this.fillNameField(name)
    this.fillCountryField(country)
    this.fillCityField(city)
    this.fillCreditCardField(card)
    this.fillMonthField(month)
    this.fillYearField(year)
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }

  checkPurchaseBtn() {
    this.purchaseBtn.should('exist');
  }

  checkTotalInText() {
    this.totalInText.should('exist');
  }

  checkNameField() {
    this.nameField.should('exist');
  }

  checkCountryField() {
    this.countryField.should('exist');
  }

  checkCityField() {
    this.cityField.should('exist');
  }

  checkCreditCardField() {
    this.creditCardField.should('exist');
  }

  checkMonthField() {
    this.monthField.should('exist');
  }

  checkYearField() {
    this.yearField.should('exist');
  }

  checkAllFieldsOnPlaceOrder() {
    this.checkNameField
    this.checkCountryField
    this.checkCityField
    this.checkCreditCardField
    this.checkMonthField
    this.checkYearField
    cy.wait(400)
  }

  checkAccertData() {
    this.accertData.should('exist');
  }

  clickOnOkBtn() {
    this.okBtn.click({force: true});
  }
}

export default CartPagePageObject