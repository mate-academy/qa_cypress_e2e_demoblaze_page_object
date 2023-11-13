import PageObject from '../PageObject';

class CartPage extends PageObject {
  assertProductInCart(productName) {
    cy.contains(productName).should('exist');
  }

  placeOrder() {
    cy.contains('Place Order').click();
  }
}

export default CartPage;