import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  assertCart(productName) {
    cy.get('.table-responsive').should('contain.text', productName);
  }

  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName)
      .click();
  }
}

export default CartPageObject;
