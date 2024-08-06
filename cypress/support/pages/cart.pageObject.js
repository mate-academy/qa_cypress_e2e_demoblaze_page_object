class CartPage {
  clickOrderButton() {
    cy.get('.btn.btn-success').click();
  }

  clickTheCartLink() {
    cy.contains('Cart').click();
  }

  assertCartContainsProduct(productName) {
    cy.get('.success').contains(productName).should('be.visible');
  }
}

export default CartPage;
