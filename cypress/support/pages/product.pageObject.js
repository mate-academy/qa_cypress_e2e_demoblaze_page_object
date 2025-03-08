import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/index.html';

  clickOnButton(buttonName) {
    cy.contains('.btn.btn-success.btn-lg', buttonName)
      .click();
  }
}

export default ProductPageObject;
