import PageObject from '../PageObject';

class BtnPageObject extends PageObject {
  clickOnAddBtn() {
    cy.contains('.btn', 'Add to cart')
      .click();
  };

  clickOnOrderBtn() {
    cy.contains('.btn', 'Place Order')
      .click();
  };

  clickOnPurcaseBtn() {
    cy.contains('.btn', 'Purchase')
      .click();
  };

  clickOnOkBtn() {
    cy.contains('button', 'OK')
      .click();
  };
};

export default BtnPageObject;
