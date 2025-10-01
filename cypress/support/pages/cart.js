import PageObject from './pageObject';

class CartPage extends PageObject {
  openCart() {
    cy.contains('Cart').click();
  }

  assertProduct(productName) {
    cy.get('tr').contains(productName).should('exist');
  }

  placeOrder() {
    cy.contains('Place Order').click();
  }
}

export default CartPage;
