import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  clickAddToCart() {
    cy.contains('.btn-success', 'Add to cart')
      .click();
  }

  clickOnCart() {
    cy.contains('Cart')
      .click();
  }

  assertProductInCart(product) {
    cy.get('.success')
      .should('contain.text', product);
  }

  clickPlaceOrder() {
    cy.contains('Place Order')
      .click();
  }
}

export default CartPageObject;
