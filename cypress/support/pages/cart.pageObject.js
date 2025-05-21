import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  clickOnCartLink() {
    cy.get('#cartur').click();
  }

  assertProductInCart(productName) {
    cy.get('tbody tr').should('contain.text', productName);
  }

  clickPlaceOrder() {
    cy.contains('button', 'Place Order').click();
  }
}

export default CartPageObject;
