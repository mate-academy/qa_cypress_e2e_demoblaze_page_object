import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/index.html';

  assertProduct(productName) {
    cy.get('table tbody tr.success td')
      .should('contain.text', productName);
  }
};

export default CartPageObject;
