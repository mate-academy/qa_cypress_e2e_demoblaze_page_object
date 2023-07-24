import PageObject from '../PageObject';
class cartPageObject extends PageObject {
  clickAddToTheCart() {
    cy.contains('Add to cart').click();
  }

  assertProductInCart(product) {
    cy.get('.success').should('contain.text', product);
  }

  clickPlaceOrder() {
    cy.contains('button', 'Place Order').click();
  }
}

export default cartPageObject;
