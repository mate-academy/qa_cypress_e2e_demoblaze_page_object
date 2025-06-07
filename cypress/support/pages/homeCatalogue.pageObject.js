import PageObject from '../PageObject';

export class HomeAndCataloguePageObject extends PageObject {
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
}

export class CheckoutFormPageObject extends PageObject {
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

  get cardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  get purchaseButton() {
    return cy.contains('.btn', 'Purchase');
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCountry(country) {
    this.countryField.type(country);
  }

  typeCity(city) {
    this.cityField.type(city);
  }

  typeCredit(card) {
    this.cardField.type(card);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typeYear(year) {
    this.yearField.type(year);
  }

  clickOnPurchaseBtn() {
    this.purchaseButton.click();
  }
}
