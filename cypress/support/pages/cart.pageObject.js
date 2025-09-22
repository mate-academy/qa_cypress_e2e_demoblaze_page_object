export default class CartPage {
  openCart() {
    cy.get('#cartur').click();
    return this;
  }

  getProductInCart(productName) {
    return cy.contains('tr', productName); // tylko zwraca element, assertion w spec
  }

  placeOrder() {
    cy.contains('button', 'Place Order').click();
    return this;
  }
}
