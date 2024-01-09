import PageObject from '../PageObject';

class PageOrderForm extends PageObject {
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

  typeName(name) {
    this.nameField.type(name);
  }

  typeCountry(country) {
    this.countryField.type(country);
  }

  typeCreditCard(card) {
    this.creditCardField.type(card);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typeYear(year) {
    this.yearField.type(year);
  }

  typeCity(city) {
    this.cityField.type(city);
  }

  clickOnPurchase(button) {
    cy.get('[onclick="purchaseOrder()"]').click();
  }

  get modal() {
    return cy.contains('h2', 'Thank you for your purchase!');
  }

  get modal2() {
    return cy.get('[class="sweet-alert  showSweetAlert visible"]')
      .should('contain', 'Id');
  }

  get modal3() {
    return cy.get('[class="sweet-alert  showSweetAlert visible"]')
      .should('contain', 'Amount');
  }

  get modal4() {
    return cy.get('[class="sweet-alert  showSweetAlert visible"]')
      .should('contain', 'Card Number');
  }

  get modal5() {
    return cy.get('[class="sweet-alert  showSweetAlert visible"]')
      .should('contain', 'Name');
  }

  get modal6() {
    return cy.get('[class="sweet-alert  showSweetAlert visible"]')
      .should('contain', 'Date');
  }

  checkModalData() {
    this.modal.should('be.visible');
    this.modal2.should('be.visible');
    this.modal3.should('be.visible');
    this.modal4.should('be.visible');
    this.modal5.should('be.visible');
    this.modal6.should('be.visible');
  }

  get buttonOK() {
    return cy.contains('[class="confirm btn btn-lg btn-primary"]', 'OK');
  }

  clickOnOK() {
    this.buttonOK.click();
  }
};

export default PageOrderForm;
