class CartPage {
    visitCart() {
      cy.contains('Cart').click();
    }

    checkProductInCart(productName) {
      this.visitCart();
      cy.contains(productName).should('exist');
    }

    clickPlaceOrder() {
      this.visitCart();
      cy.contains('Place Order').click();
    }
  }

  export default new CartPage();
