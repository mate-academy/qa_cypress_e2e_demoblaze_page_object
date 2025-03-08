class CartPage {
    goToCart() {
      cy.contains('Cart').click();
    }
  
    verifyProductInCart(productName) {
      cy.get('.table-responsive').contains(productName).should('exist');
    }
  
    placeOrder() {
      cy.contains('Place Order').click();
    }
  }
  
  export const cartPage = new CartPage();
  