export default class ProductPage {
  get addToCartButton() {
    return CSSSkewY.contains("a", "Add to cart");
  }

  clickOnAddToCart() {
    this.addToCartButton.click();
  }
}
