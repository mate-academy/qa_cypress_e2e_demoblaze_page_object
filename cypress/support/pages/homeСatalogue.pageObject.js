import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }

  clickOnButton(button) {
    cy.contains('.btn', button)
      .click();
  }

  get userNameField() {
    return cy.get('#name');
  }

  get userCountryField() {
    return cy.get('#country');
  }

  get userCityField() {
    return cy.get('#city');
  }

  get userCardField() {
    return cy.get('#card');
  }

  get userMonthField() {
    return cy.get('#month');
  }

  get userYearField() {
    return cy.get('#year');
  }

  fillNameField(name) {
    this.userNameField.type(name);
  }

  fillCountryField(country) {
    this.userCountryField.type(country);
  }

  fillCityField(city) {
    this.userCityField.type(city);
  }

  fillCardField(card) {
    this.userCardField.type(card);
  }

  fillMonthField(month) {
    this.userMonthField.type(month);
  }

  fillYearField(year) {
    this.userYearField.type(year);
  }

  get purchaseText() {
    return cy.get('.sweet-alert');
  }

  ModalWindowContainText(text) {
    this.purchaseText.should('contain', text);
  }

  get randomName() {
    return cy.get('.lead');
  }

  ModalWindowContainName(name) {
    this.randomName.should('contain', name);
  }

  get randomCreditCard() {
    return cy.get('.lead');
  }

  ModalWindowContainCard(card) {
    this.randomName.should('contain', card);
  }

  get productName() {
    return cy.get('.table');
  }

  cartContainProduct(product) {
    this.productName.should('contain', product);
  }
}

export default HomeAndCataloguePageObject;
