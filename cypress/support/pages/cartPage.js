import PageObject from '../PageObject';

class CartPage extends PageObject {
  get cartLink() {
    return cy.contains('#cartur', 'Cart');
  }

  get placeOrderBtn() {
    return cy.contains('button', 'Place Order');
  }

  open() {
    this.cartLink.click();
  }

  assertProductPresent(productName) {
    cy.contains('td', productName).should('exist');
  }

  placeOrder() {
    this.placeOrderBtn.click();
  }
}

export default CartPage;
