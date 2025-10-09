import PageObject from '../PageObject';

class ProductPage extends PageObject {
  get addToCartBtn() {
    return cy.contains('a', 'Add to cart');
  }

  addToCart() {
    return this.addToCartBtn.click()
      .then(() => {
        cy.on('window:alert', (txt) => {
          expect(txt).to.contain('Product added');
        });
      });
  }
}

export default ProductPage;
