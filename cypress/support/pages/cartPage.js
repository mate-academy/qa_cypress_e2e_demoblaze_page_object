class cartPage {
  assertproductInCart() {
    cy.contains('Sony vaio i7').should('exist');
  }

  clickPlaceOrder() {
    cy.contains('Place Order').click();
  }
}

export default new cartPage();