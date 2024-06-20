import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  assertProduct(productName) {
    cy.get('.table').should('contain', productName);
  }

  get placeOrderBtn () {
    return cy.contains('.btn', 'Place Order');
  }

  clickOnPlaceOrderBtn () {
    this.placeOrderBtn.click();
  }

  addName (name) {
    cy.get('#name').type(name);
  }

  addCountry (country) {
    cy.get('#country').type(country);
  }

  addCity (city) {
    cy.get('#city').type(city);
  }

  addCreditCard (creditCard) {
    cy.get('#card').type(creditCard);
  }

  addMonth (month) {
    cy.get('#month').type(month);
  }

  addYear (year) {
    cy.get('#year').type(year);
  }

  get purchaseBtn () {
    return cy.contains('.btn', 'Purchase');
  }

  clickOnPurchaseBtn () {
    this.purchaseBtn.click();
  }

  assertAlert (name, creditCard, assertMessage) {
    cy.get('.sweet-alert')
      .should('contain.text', name)
      .and('contain.text', creditCard)
      .and('contain.text', assertMessage);
  }

  clickOnOkBtn() {
    cy.contains('button', 'OK').click();
  }
}
export default CartPageObject;
