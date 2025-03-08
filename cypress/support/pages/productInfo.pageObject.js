import PageObject from '../PageObject';

class ProductInfoPageObject extends PageObject {
  url = '/index.html';

  clickOnButton(buttonName) {
    cy.contains('.col-sm-12 > .btn', buttonName)
      .click();
  }

  clickOnCartIcon() {
    cy.contains('#cartur', 'Cart').click();
  }

  checkAlertContains(text) {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains(text);
    });
  }
}

export default ProductInfoPageObject;
