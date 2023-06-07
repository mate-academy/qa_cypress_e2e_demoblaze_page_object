import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  clickOnButton(button) {
    cy.contains('.btn', button)
      .click();
  }
  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }
};

export default ProductPageObject;
