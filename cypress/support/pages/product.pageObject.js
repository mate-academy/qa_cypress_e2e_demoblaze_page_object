import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/prod.html';

  get addToCardBtn() {
    return cy.contains('.btn', 'Add to cart');
  }

  clickOnAddToCardBtn() {
    this.addToCardBtn.click();
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }
}

export default ProductPageObject;