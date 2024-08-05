class CartPage {
  clickOrder() {
    cy.get('.btn.btn-success').click();
  }

  assertCart(productName) {
    cy.get('.success').contains(productName).should('be.visible');
  }
}

export default CartPage;
