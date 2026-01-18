import PageObject from '../PageObject';

class CheckoutPageObject extends PageObject {
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
    return cy.contains('.btn', 'Purchase');
  }

  get confirmationModal() {
    return cy.get('.sweet-alert');
  }

  get confirmationOkBtn() {
    return cy.contains('.confirm', 'OK');
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

  typeCreditCard(card) {
    this.creditCardField.type(card);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typeYear(year) {
    this.yearField.type(year);
  }

  clickOnPurchase() {
    this.purchaseBtn.click();
  }

  clickOnOk() {
    this.confirmationOkBtn.click();
  }

  assertConfirmationData(data) {
    this.confirmationModal.should('be.visible');
    cy.get('.sweet-alert').within(() => {
      cy.get('.lead').invoke('text').then((text) => {
        expect(text).to.include(data.card);
        expect(text).to.include('Name:');
      });
    });
  }
}

export default CheckoutPageObject;
