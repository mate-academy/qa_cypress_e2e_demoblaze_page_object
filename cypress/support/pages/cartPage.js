import ProductPage from './productPage';

class CartPage extends ProductPage {
  cartPageUrl = '/cart.html#';

  visit(cartPageUrl) {
    cy.visit(cartPageUrl || this.cartPageUrl);
  }

  checkProductInCart(productName) {
    cy.contains('td', productName);
  }

  clickOnPlaceOrder() {
    cy.contains('.btn', 'Place Order')
      .click();
  }
};

export default CartPage;
