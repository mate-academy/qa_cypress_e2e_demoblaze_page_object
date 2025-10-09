import PageObject from '../PageObject';

class ProductPage extends PageObject {
  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart');
  }

  addToCart() {
    cy.on('window:alert', (txt) => {
      expect(txt).to.eq('Product added');
    });
    this.addToCartBtn.click();
  }
}

export default ProductPage;
