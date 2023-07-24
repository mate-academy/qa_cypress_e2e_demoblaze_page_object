import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  assertProductInCart(productName) {
    cy.get('.success')
      .should('contain', productName);
  }

  clickPlaceOrderBtn() {
    cy.contains('button', 'Place Order')
      .click();
  }
}

export default CartPageObject;
