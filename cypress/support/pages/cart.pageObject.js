import PageObject from '../PageObject';

export class CartPageObject extends PageObject {
  url = '/';
  assertItemIsAdded(item) {
    return cy.get('.success', { timeout: 10000 }).should('contain', item);
  }

  clickBtnPlaceOrder() {
    return cy.contains('.btn.btn-success', 'Place Order').click();
  }

  get selectNameField() {
    return cy.get('#name');
  }

  get selectCountryField() {
    return cy.get('#country');
  }

  get selectCityField() {
    return cy.get('#city');
  }

  get selectCardField() {
    return cy.get('#card');
  }

  get selectMonthField() {
    return cy.get('#month');
  }

  get selectYearField() {
    return cy.get('#year');
  }

  clickPurchaseBtn() {
    return cy.contains('.btn.btn-primary', 'Purchase').click();
  }

  assertModalWinHasCardNumber(card) {
    return cy.get('.lead.text-muted').should('contain.text', card);
  }

  assertModalWinHasCustomerName(name) {
    return cy.get('.lead.text-muted').should('contain.text', name);
  }

  clickOkBtn() {
    return cy.get('.confirm.btn.btn-lg.btn-primary').click();
  }
}

export default CartPageObject;
