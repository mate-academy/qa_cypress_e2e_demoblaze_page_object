import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  get cartItems() {
    return cy.get('.cart-item'); 
  }

  assertProductInCart(productName) {
    this.cartItems.should('contain', productName);
  }

  get placeOrderButton() {
    return cy.contains('Place Order');
  }

  clickPlaceOrder() {
    this.placeOrderButton.click();
  }
}

export default CartPageObject;