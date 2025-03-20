import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = 'https://www.demoblaze.com/index.html';

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

  get nameField() {
    return cy.get('#name');
  }

  get cuntryField() {
    return cy.get('#country', { force: true });
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

  get PurchaseBtn() {
    return cy.contains('.btn', 'Purchase');
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

  typeCard(card) {
    this.cardField.type(card, { force: true });
  }

  typeMonth(month) {
    this.monthField.type(month, { force: true });
  }

  get yearField() {
    return cy.get('#year');
  }

  typeYear(year) {
    this.yearField.type(year, { force: true });
  }

  clickOnSPurchaseBtn() {
    this.PurchaseBtn.click();
  }

  get okBtn() {
    return cy.contains('.btn', 'OK');
  }

  clickOnOkBtn() {
    this.okBtn.click();
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }
}

export default HomeAndCataloguePageObject;
