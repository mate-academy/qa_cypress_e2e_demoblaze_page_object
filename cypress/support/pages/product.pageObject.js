import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
  get addToCartButton() {
    return cy.contains('.btn', 'Add to cart');
  }

  addToCart(message) {
    cy.window().then((window) => {
      cy.stub(window, 'alert').as('productAlert');
    });
    this.addToCartButton.click();
    cy.get('@productAlert').should('have.been.calledOnceWithExactly', message);
  }
}

export default ProductPageObject;
