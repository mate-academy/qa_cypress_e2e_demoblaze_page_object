import PageObject from '../PageObject';
/// <reference types='cypress' />

class CartPageObject extends PageObject {
  get productTitle() {
    return cy.get('tr');
  }

  assertAddedProduct(productName) {
    this.productTitle.should('contain', productName);
  };

  fillInFieldWithData(fieldName, text) {
    cy.get(fieldName)
      .invoke('val', text);
  };

  assertEnteredData(data) {
    cy.get('.text-muted').should('contain', data);
  };
}

export default CartPageObject;
