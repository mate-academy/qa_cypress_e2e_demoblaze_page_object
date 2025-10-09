import PageObject from '../PageObject';

class CartPage extends PageObject {
  get cartTable() {
    return cy.get('#tbodyid');
  }

  open() {
    cy.get('#cartur').click();
    cy.url().should('include', 'cart.html');
    this.cartTable.should('be.visible');
  }

  assertProductPresent(productName) {
    this.cartTable.should('contain.text', productName).and('be.visible');
  }

  placeOrder() {
    cy.contains('button', 'Place Order').click();
  }
}

export default CartPage;
