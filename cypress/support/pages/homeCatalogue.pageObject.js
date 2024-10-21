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

  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName)
      .click();
  }

  verifyAddingToCart() {
    return this.assertAllert('Product added');
  }

  verifyProductinCart(product) {
    cy.contains('td', product)
      .should('be.visible');
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

  clickOnPurchaseBtn(buttonName) {
    cy.contains('.btn', 'Purchase')
      .click();
  }

  verifyPurchasing(name, card) {
    cy.get('.sweet-alert').should('be.visible');
    cy.get('.lead').should('contain', name);
    cy.get('.lead').should('contain', card);
  }

  clickOnOkBtn() {
    cy.contains('.btn', 'OK')
      .click();
  }
}

export default HomeAndCataloguePageObject;
