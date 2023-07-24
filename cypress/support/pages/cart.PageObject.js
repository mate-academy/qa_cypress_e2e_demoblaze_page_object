import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  placeOrder() {
    cy.contains('.btn', 'Place Order').click();
  }

  typeName(name) {
    cy.get('#name').type(name);
  }

  typeCountry(country) {
    cy.get('#country').type(country);
  }

  typeCity(city) {
    cy.get('#city').type(city);
  }

  typeCardNumber(card) {
    cy.get('#card').type(card);
  }

  typeMonth(month) {
    cy.get('#month').type(month);
  }

  typeYear(year) {
    cy.get('#year').type(year);
  }

  makePurchase() {
    cy.contains('.btn', 'Purchase').click();
  }

  assertAlert (name, card, allertMessage) {
    cy.get('.sweet-alert')
      .should('contain.text', name)
      .and('contain.text', card)
      .and('contain.text', allertMessage);
  }

  clickOnOkBtn() {
    cy.contains('.btn-primary', 'OK').click();
  }

  get addedProduct() {
    return cy.get('#tbodyid');
  }
}

export default CartPageObject;
