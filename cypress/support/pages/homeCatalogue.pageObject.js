import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  get buttonClassBtn() {
    return cy.get('.btn-success');
  }

  get addToCartBtn() {
    return cy.get('.btn-success');
  }

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get confirmBtn() {
    return cy.get('.confirm');
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

  typeName(name) {
    this.nameField.type(name);
  }

  typeCountry(country) {
    this.countryField.type(country);
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

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName).click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName).click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product).click();
  }

  clickOnButton() {
    this.buttonClassBtn.click();
  }

  clickOnAddToCart() {
    this.addToCartBtn.click();
  }

  clickOnPurchaseButton() {
    this.purchaseBtn.click();
  }

  clickOnConfirmButton() {
    this.confirmBtn.click();
  }

  assertProductInCart(product) {
    cy.contains(product).should('be.visible');
  }

  assertDataInModal(name, card) {
    cy.contains(name).should('be.visible');
    cy.contains(card).should('be.visible');
  }
}

export default HomeAndCataloguePageObject;
