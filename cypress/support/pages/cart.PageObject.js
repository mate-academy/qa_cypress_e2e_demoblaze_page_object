import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  constructor() {
    super();

    this.url = '/cart.html';
  }

  get productsTable() {
    return cy.get('table tbody');
  }

  get purchaseModal() {
    return cy.get('.sweet-alert');
  }

  assertProductInCart(productName) {
    this.productsTable.should('contain', `${productName}`)
      .and('be.visible');
  }

  clickOnPlaceOrderBtn() {
    cy.contains('[data-target="#orderModal"]', 'Place Order')
      .click();
  }

  assertEnteredDataInModal(formData) {
    const {
      name,
      creditCard
    } = formData;

    this.purchaseModal
      .should('contain', name)
      .and('contain', creditCard);
  }

  clickOkeyBtn() {
    this.purchaseModal
      .contains('button', 'OK').click();
  }
}

export default CartPageObject;
