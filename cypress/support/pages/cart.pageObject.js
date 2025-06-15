class CartPageObject {
  clickCartLink() {
    cy.get('#cartur').click();
  }

  verifyProductInCart(productName) {
    cy.get('.success td').should('contain', productName);
  }

  clickPlaceOrder() {
    cy.contains('Place Order').click();
  }

  fillForm({ name, country, city, card, month, year }) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  clickPurchase() {
    cy.contains('Purchase').click();
  }

  verifyModalContains({ name, card }) {
    cy.get('.sweet-alert').should('be.visible')
      .and('contain', name)
      .and('contain', card);
  }

  clickOk() {
    cy.contains('OK').click();
  }
}

export default CartPageObject;
