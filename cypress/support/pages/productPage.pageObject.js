import PageObject from "../PageObject";

class ProductPageObject extends PageObject {
  url = "/index.html";

  clickOnAddToCart() {
    cy.get('[onclick="addToCart(9)"]').click();
  }

  clickOnCart() {
    cy.get("#cartur").click();
  }
}

export default ProductPageObject;