import PageObject from '../PageObject';

class ProductCartPageObject extends PageObject {
  url = '/index.html';

  assertProduct(productName) {
    cy.contains('#tbodyid', productName)
      .should('exist');
  }

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }
}

export default ProductCartPageObject;