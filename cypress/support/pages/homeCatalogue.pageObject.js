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

  clickOnAddToCartBtn() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }

  verifyAddingToCart() {
    return this.assertAllert('Product added');
  }

  verifyProductsInCart() {
    cy.contains('#tbodyid', 'Sony vaio i7')
      .should('contain', 'Sony vaio i7');
  }

  clickOnPlaceOrderBtn() {
    cy.contains('.btn', 'Place Order')
      .click();
  }

  get nameField() {
    return cy.get('#name');
  }

  fillNameField(name) {
    this.nameField.type(name);
  }

  get countryField() {
    return cy.get('#country');
  }

  fillCountryField(country) {
    this.countryField.type(country);
  }

  get cityField() {
    return cy.get('#city');
  }

  fillCityField(city) {
    this.cityField.type(city);
  }

  get creditCardField() {
    return cy.get('#card');
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

  clickOnPurchaseBtn() {
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
