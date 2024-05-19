class CartPage {
  assertAddedProduct() {
    cy.get('td').should('contain', 'Sony vaio i7');
  }

  clickOnThePlaceOrderBtn() {
    cy.get('.btn').contains('Place Order').click();
  }
}

export const cartPage = new CartPage();
