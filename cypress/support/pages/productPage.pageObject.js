import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/prod.html?idp_=9';

  get addToCartBtn () {
    return cy.contains('.btn', 'Add to cart');
  }

  clickOnAddToCartBtn () {
    this.addToCartBtn.click();
  }

  assertAllert () {
    return cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added`);
    });
  }
}
export default ProductPageObject;
