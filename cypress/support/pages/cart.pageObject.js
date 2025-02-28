class CartPageObject {
  assertProductInCart(productName) {
    cy.contains('td', productName).should('exist');
  }

  clickOnPlaceOrder() {
    cy.contains('button', 'Place Order').click();
  }

  fillForm({ name, country, city, card, month, year }) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  clickOnPurchase() {
    cy.contains('button', 'Purchase').click();
  }

  assertEnteredData(card, name) {
    cy.contains('p', card).should('be.visible');
    cy.contains('p', name).should('be.visible');
  }

  clickOnOk() {
    cy.contains('button', 'OK').click();
  }
}

export default CartPageObject;
