class CartPage {
  openCart() {
    cy.get('#cartur').click();
    cy.url().should('include', 'cart.html');
  }

  assertProductInCart(productName) {
    cy.get('#tbodyid').should('contain.text', productName);
  }

  clickPlaceOrder() {
    cy.contains('Place Order').click();
  }
}
export default CartPage;
