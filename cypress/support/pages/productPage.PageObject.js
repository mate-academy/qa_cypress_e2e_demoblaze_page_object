import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  url = '/prod.html?idp_=9';

  get addToCartButton () {
    return cy.contains('.btn', 'Add to cart');
  }
  clickOnAddToCartButton () {
    this.addToCartButton.click();
  }
  assertAllert () {
    return cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added`);
    });
  }
}
export default ProductPageObject;

