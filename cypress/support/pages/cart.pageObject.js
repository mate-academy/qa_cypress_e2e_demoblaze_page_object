import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  assertAboutProduct(productName) {
    cy.contains(productName)
      .should('exist');
  }

  clickOnTheButton(name) {
    cy.contains('.btn', name)
      .click();
  }
}

export default CartPageObject;
