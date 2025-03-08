import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/index.html';

  clickAddBtn() {
    return cy.contains('.btn', 'Add to cart').click();
  }
}

export default ProductPageObject;
