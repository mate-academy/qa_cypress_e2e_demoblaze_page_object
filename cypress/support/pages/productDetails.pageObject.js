import PageObject from '../PageObject';
class ProductDetailsPageObject extends PageObject {
  // url = '/index.html';

  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart');
  }

  clickOnAddBtn() {
    this.addToCartBtn.click();
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }
}

export default ProductDetailsPageObject;
