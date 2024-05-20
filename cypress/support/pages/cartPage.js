class CartPage {
  clickCartLink() {
    cy.get('a').contains('Cart').click();
  }

  assertProductExistInCart(productName) {
    cy.get('#tbodyid').should('contain', productName);
  }
};

export const cartPage = new CartPage();
