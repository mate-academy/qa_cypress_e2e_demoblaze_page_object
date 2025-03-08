import PageObject from '../PageObject';

class CartPageObject extends PageObject {

  CartProducts(productName) {
    cy.get('.table')
      .should('contain', productName);
  }

  PlaceOrderButton() {
    cy.contains('.btn', 'Place Order')
      .click();
  }

  TypeName(name) {
    cy.findById('name').type(name);
  }

  TypeCountry(country) {
    cy.findById('country').type(country);
  }

  TypeCity(city) {
    cy.findById('city').type(city);
  }

  TypeCreditCard(cardNumber) {
    cy.findById('card').type(cardNumber);
  }

  TypeMonth(month) {
    cy.findById('month').type(month);
  }

  TypeYear(year) {
    cy.findById('year').type(year);
  }

  PurchaseButton() {
    cy.contains('.btn btn-primary', 'Purchase')
      .click();
  }

  verifySuccessMessage(message, cardNumber, name) {
    cy.get('.sweet-alert')
      .should('contain', message)
      .and('contain', name)
      .and('contain', cardNumber);
  }

  OkButton() {
    cy.contains('button', 'OK').click();
  }
}

export default CartPageObject;
