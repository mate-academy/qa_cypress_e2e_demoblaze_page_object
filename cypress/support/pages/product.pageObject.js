export default class ProductPage {
  get addToCartButton() {
    return cy.contains('a', 'Add to cart');
  }

  clickOnAddToCart() {
    this.addToCartButton.click();
  }
}
