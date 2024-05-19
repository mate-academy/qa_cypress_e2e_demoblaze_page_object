class CartPage {
  clickToCartLink() {
    cy.get('a').contains('Cart').click();
  }

  assertProductExistsInTheCart(productName) {
    cy.get('#tbodyid').should('contain', productName);
  }
};

export const cartPage = new CartPage();
