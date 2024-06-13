import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  assertProduct(productName) {
    cy.get('.table')
      .should('contain', productName);
  }

  clickOnOrderBtn() {
    cy.contains('.btn', 'Place Order')
      .click();
  }

  addName(name) {
    cy.get('#name').type(name);
  }

  addCountry(country) {
    cy.get('#country').type(country);
  }

  addCity(city) {
    cy.get('#city').type(city);
  }

  addCreditCard(creditCard) {
    cy.get('#card').type(creditCard);
  }

  addMonth(month) {
    cy.get('#month').type(month);
  }

  addYear(year) {
    cy.get('#year').type(year);
  }

  clickOnPurchaseBtn() {
    cy.contains('.btn', 'Purchase')
      .click();
  }

  assertSuccessAlert(message, creditCard, year) {
    cy.get('.sweet-alert')
      .should('contain.text', message)
      .and('contain.text', creditCard)
      .and('contain.text', year);
  }

  clickOnOkBtn() {
    cy.contains('button', 'OK').click();
  }
}

export default CartPageObject;
