import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  clickAddToCart() {
    cy.contains('Add to cart').click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Product added');
    });
  }

  clickCart() {
    cy.contains('Cart').click();
  }

  assertProductInCart(productName) {
    cy.contains(productName).should('exist');
  }
}

export default CartPageObject;
