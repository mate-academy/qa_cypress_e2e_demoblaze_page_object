import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  assertProduct(productName) {
    cy.get('.table').should('contain', productName);
  }

  ClickPlaceOrder() {
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

  typeCreditCard(card) {
    cy.get('#card').type(card);
  }

  typeMonth(month) {
    cy.get('#month').type(month);
  }

  typeYear(year) {
    cy.get('#year').type(year);
  }

  clickOnPurchaseBtn() {
    cy.contains('.btn', 'Purchase').click();
  }

  assertSuccessAlert(message, creditCard, name) {
    cy.get('.sweet-alert')
      .should('contain.text', message)
      .and('contain.text', creditCard)
      .and('contain.text', name);
  }

  clickOnOkBtn() {
    cy.contains('button', 'OK').click();
  }
}
export default CartPageObject;