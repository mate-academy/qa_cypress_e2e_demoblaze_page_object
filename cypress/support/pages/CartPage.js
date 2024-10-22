class CartPage {
    verifyProductInCart(productName) {
        cy.contains(productName).should('be.visible');
    }
    placeOrder() {
        cy.contains('Place Order').click();
    }
}
export default CartPage;
