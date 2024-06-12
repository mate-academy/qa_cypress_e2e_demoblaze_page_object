import PageObject from '../PageObject';

class ProductPage extends PageObject {
  get addToCartButton() {
    return cy.contains('.btn', 'Add to cart');
  };

  get cartLink() {
    return cy.getById('cartur');
  };

  get cartTable() {
    return cy.getById('tbodyid');
  };

  get placeOrderButton() {
    return cy.get('[data-target="#orderModal"]');
  };

  get nameField() {
    return cy.getById('name');
  };

  get countryField() {
    return cy.getById('country');
  };

  get cityField() {
    return cy.getById('city');
  };

  get creditCardField() {
    return cy.getById('card');
  };

  get monthField() {
    return cy.getById('month');
  };

  get yearField() {
    return cy.getById('year');
  };

  get purchaseButton() {
    return cy.contains('.btn', 'Purchase');
  };

  get purchaseModal() {
    return cy.get('.sweet-alert');
  };

  get modalOkButton() {
    return cy.contains('.confirm', 'OK');
  };

  clickOnAddToCartButton() {
    this.addToCartButton.click();
  };

  clickOnCartLink() {
    this.cartLink.click();
  };

  assertProductInTheCart(title) {
    this.cartTable.should('contain', title);
  };

  clickOnPlaceOrderButton() {
    this.placeOrderButton.click();
  };

  typeName(name) {
    this.nameField.type(name);
  };

  typeCountry(country) {
    this.countryField.type(country);
  };

  typeCity(city) {
    this.cityField.type(city);
  };

  typeCreditCard(card) {
    this.creditCardField.type(card);
  };

  typeMonth(month) {
    this.monthField.type(month);
  };

  typeYear(year) {
    this.yearField.type(year);
  };

  clickOnPurchaseButton() {
    this.purchaseButton.click();
  };

  assertPurchaseModalIsVisible() {
    this.purchaseModal.should('be.visible');
  };

  assertModalPurchaseCard(creditCard) {
    this.purchaseModal.should('contain', creditCard);
  };

  assertModalPurchaseName(name) {
    this.purchaseModal.should('contain', name);
  };

  clickOnOKButton() {
    this.modalOkButton.click();
  };
};

export default ProductPage;
