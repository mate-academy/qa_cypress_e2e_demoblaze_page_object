import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  get addToCartBtn() {
    return cy.get('.btn.btn-success.btn-lg');
  }
}

export default ProductPageObject;
