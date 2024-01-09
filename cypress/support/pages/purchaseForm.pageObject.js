import PageObject from '../PageObject';

class purchaseFormPageObject extends PageObject {
  findFieldById(id, fieldName) {
    cy.get(`[id=${id}]`)
      .type(fieldName);
  }

  get purchaseButton() {
    return cy.get('[onclick="purchaseOrder()"]');
  }

  clickOnPurchaseButton() {
    this.purchaseButton.click();
  }

  get allertAfterPurchase() {
    return cy.get('.sweet-alert');
  }

  assertDataAfterPurchase(data) {
    this.allertAfterPurchase.should('contain', data);
  }

  get okButton () {
    return cy.get('.confirm.btn.btn-lg.btn-primary');
  }

  clickOnOkAfterPurchase() {
    this.okButton.click();
  }
}

export default purchaseFormPageObject;
