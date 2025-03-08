import CartPageObject
  from './cart.pageObject';

class ModalOrderFormPageObject extends CartPageObject {
  url = '/cart.html';

  get orderInfo() {
    return cy.get('.sweet-alert .lead');
  }

  get okBtn() {
    return cy.get('.confirm');
  }

  clickOnOkBtn() {
    this.okBtn.click();
  }

  assertInfoIsDisplayed(card, name) {
    this.orderInfo.should('contain', card);
    this.orderInfo.should('contain', name);
  }
}

export default ModalOrderFormPageObject;
