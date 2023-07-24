import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  containProduct(productName) {
    cy.get('.table').should('contain', productName);
  }

  clickOnPlaceOrderBtn() {
    cy.contains('.btn', 'Place Order').click();
  }

  fillName(name) {
    cy.findById('name').type(name);
  }

  fillCountry(country) {
    cy.findById('country').type(country);
  }

  fillCity(city) {
    cy.findById('city').type(city);
  }

  fillCard(card) {
    cy.findById('card').type(card);
  }

  fillMonth(month) {
    cy.findById('month').type(month);
  }

  fillYear(year) {
    cy.findById('year').type(year);
  }

  clickOnPurchaseBtn() {
    cy.contains('.btn', 'Purchase')
      .click();
  }

  assertSuccessPurchase(message, creditCard, year) {
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
