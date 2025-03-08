import PageObject from '../PageObject';

class ProductPage extends PageObject {
  clickOnAddBtn() {
    return cy.contains('Add to cart').click();
  }
}

export default ProductPage;
