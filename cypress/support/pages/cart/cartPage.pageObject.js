import PageObject from '../../PageObject';

class CartPagePageObject extends PageObject {
  url = '/cart.html';

  assertProductAdded(productName) {
    cy.get('#tbodyid')
      .should('contain.text', productName);
  }

  clickOnBtn(name) {
    cy.contains('.btn', name)
      .click();
  }
}

export default CartPagePageObject;
