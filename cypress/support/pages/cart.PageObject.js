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
    cy.findById('name').type(name);
  }

  addCountry(country) {
    cy.findById('country').type(country);
  }

  addCity(city) {
    cy.findById('city').type(city);
  }

  addCreditCard(creditCard) {
    cy.findById('card').type(creditCard);
  }

  addMonth(month) {
    cy.findById('month').type(month);
  }

  addYear(year) {
    cy.findById('year').type(year);
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
