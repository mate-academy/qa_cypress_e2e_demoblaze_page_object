import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  addedProduct(productName) {
    cy.get('table').should('contain', productName);
  }

  clickOnPlaceOrderBtn() {
    cy.contains('button', 'Place Order').click();
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

  typeCard(card) {
    cy.get('#card').type(card);
  }

  typeMonth(month) {
    cy.get('#month').type(month);
  }

  typeYear(year) {
    cy.get('#year').type(year);
  }

  clickOnPurchaseBtn() {
    cy.contains('button', 'Purchase').click();
  }

  assertEnteredData(message, card, name) {
    cy.get('.sweet-alert')
      .should('contain', card)
      .and('contain', name);
  }

  clickOnOkBtn() {
    cy.contains('button', 'OK').click();
  }
}

export default CartPageObject;
