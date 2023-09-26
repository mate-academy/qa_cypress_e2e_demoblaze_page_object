import HomeAndCataloguePageObject
  from './homeСatalogue.pageObject';
/// <reference types='cypress' />

class CartPageObject extends HomeAndCataloguePageObject {
  url = '/cart.html';

  get palceOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  clickOnPlaceOrderBtn() {
    this.palceOrderBtn.click();
  }

  assertProductIsDisplayed(productName) {
    cy.get('tr.success').should('contain', productName);
  }
}

export default CartPageObject;
