import PageObject from "../PageObject";

class PurchasePageObject extends PageObject {
  url = 'cart.html';

  get nameInput() {
    return cy.get('#name');
  }

  get countryInput() {
    return cy.get('#country');
  }

  get cityInput() {
    return cy.get('#city');
  }

  get cardInput() {
    return cy.get('#card');
  }

  get dataMonthInput() {
    return cy.get('#month');
  }

  get dataYearInput() {
    return cy.get('#year');
  }

  getpurchaseBtn(purchaseBtn) {
    return cy.contains('.btn', purchaseBtn);
  }

  get messageAboutSuccessfulPurchase() {
    return cy.get('.sweet-alert');
  }

  get okBtn() {
    return cy.get('.confirm');
  }
}

export default PurchasePageObject;
