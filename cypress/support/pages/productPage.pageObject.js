import PageObject from "../PageObject";

class ProductPageObject extends PageObject {
  url = "/prod.html";

  checkIsProductPageOpened() {
    cy.url("equal", this.url);
  }
}

export default ProductPageObject;
