import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  assertProduct(productName) {
    cy.get('.table').should('contain', productName);
  }
  get placeOrderButton () {
    return cy.contains('.btn', 'Place Order');
  }
  clickOnPlaceOrderButton () {
    this.placeOrderButton.click();
  }
  enterName (name) {
    cy.get('#name').type(name);
  }
  enterCountry (country) {
    cy.get('#country').type(country);
  }
  enterCity (city) {
    cy.get('#city').type(city);
  }
  enterCreditCard (creditCard) {
    cy.get('#card').type(creditCard);
  }
  enterMonth (month) {
    cy.get('#month').type(month);
  }
  enterYear (year) {
    cy.get('#year').type(year);
  }
  get purchaseButton () {
    return cy.contains('.btn', 'Purchase');
  }
  clickOnPurchaseButton () {
    this.purchaseButton.click();
  }
  assertAlert (name, creditCard) {
    cy.get('.sweet-alert').should('contain', name)
    cy.get('.sweet-alert').should('contain.text', creditCard)
   
  }
  clickOkButton() {
    cy.contains('.btn', 'OK').click();
  }
}
export default CartPageObject;