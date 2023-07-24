import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  containProduct(productName) {
    cy.get('.table').should('contain', productName);
  }

  clickOnPlaceOrderBtn() {
    cy.contains('.btn', 'Place Order').click();
  }

  fillName(name) {
    cy.get('#name').type(name);
  }

  fillCountry(country) {
    cy.get('#country').type(country);
  }

  fillCity(city) {
    cy.get('#city').type(city);
  }

  fillCard(card) {
    cy.get('#card').type(card);
  }

  fillMonth(month) {
    cy.get('#month').type(month);
  }

  fillYear(year) {
    cy.get('#year').type(year);
  }

  clickOnPurchaseBtn() {
    cy.contains('.btn', 'Purchase').click();
  }

  assertSuccessPurchase(message, creditCard, year) {
    cy.get('.sweet-alert')
      .should('contain.text', message)
      .and('contain.text', creditCard)
      .and('contain.text', year);
  }

  clickOkBtn() {
    cy.contains('button', 'OK').click();
  }
}

export default CartPageObject;
