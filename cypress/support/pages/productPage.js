import ContactFormPageObject from './contactForm.pageObject';

class ProductPage extends ContactFormPageObject {
  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart');
  }
};

export default ProductPage;
