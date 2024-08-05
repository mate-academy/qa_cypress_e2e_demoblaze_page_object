import PageObject from '../PageObject';

class ProductInfoPageObject extends PageObject {
  url = '/index.html';

  clickOnButton(buttonName) {
    cy.contains('.col-sm-12 > .btn', buttonName)
      .click();
  }

  clickOnCart(cartName) {
    cy.contains('#cartur', cartName)
      .click();
  }
}

export default ProductInfoPageObject;
