import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  clickAddToTheCart() {
    cy.contains(`a`, `Add to cart`)
      .click();
  }

  assertProductInCart(product) {
    cy.get('.success')
      .should('contain.text', product);
  }

  clickPlaceOrder() {
    cy.contains(`button`, `Place Order`).click();
  }
}

export default CartPageObject;
