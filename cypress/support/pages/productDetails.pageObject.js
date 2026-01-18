import PageObject from '../PageObject';

class ProductDetailsPageObject extends PageObject {
  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart');
  }

  clickOnAddToCart() {
    this.addToCartBtn.click();
  }

  assertAlert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }
}

export default ProductDetailsPageObject;
