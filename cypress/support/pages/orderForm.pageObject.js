import PageObject from '../PageObject';

class OrderFormPageObject extends PageObject {
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

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get confirmationModal() {
    return cy.get('.sweet-alert');
  }

  get confirmationBtn() {
    return cy.get('.confirm');
  }

  fillOrderForm(orderData) {
    this.nameField.type(orderData.name);
    this.countryField.type(orderData.country);
    this.cityField.type(orderData.city);
    this.cardField.type(orderData.card);
    this.monthField.type(orderData.month);
    this.yearField.type(orderData.year);
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }

  assertEnteredData(orderData) {
    this.confirmationModal
      .should('be.visible')
      .and('contain', 'Thank you for your purchase!')
      .and('contain', `Name: ${orderData.name}`)
      .and('contain', `Card Number: ${orderData.card}`);
  }

  clickOnConfirmationBtn() {
    this.confirmationBtn.click();
  }
}

export default OrderFormPageObject;
