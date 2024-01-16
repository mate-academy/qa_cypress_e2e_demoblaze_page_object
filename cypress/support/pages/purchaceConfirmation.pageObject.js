import PageObject from '../PageObject';

class PurchaseConfirmationPageObject extends PageObject {
  get allertAfterPurchase() {
    return cy.get('.sweet-alert');
  }

  assertDataAfterPurchase(data) {
    this.allertAfterPurchase.should('contain', data);
  }
}

export default PurchaseConfirmationPageObject;
