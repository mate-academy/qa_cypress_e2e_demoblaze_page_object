import PageObject from '../PageObject';

class CartPage extends PageObject {
  url = '/cart.html';

  assertProduct(product) {
    cy.contains('tr', product)
      .should('be.visible');
  }

  deleteProduct(product) {
    cy.contains('tr', product).find('a', 'Delete').click();
  }

  placeOrder() {
    cy.contains('.btn', 'Place Order').click();
  }
}

export default CartPage;
