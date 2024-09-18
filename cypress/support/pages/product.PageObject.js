import PageObject from "../PageObject";

class ProductPageObject extends PageObject {
  url = "/index.html";

  clickOnAddToCart() {
    cy.get('.btn-success:contains("Add to cart")').click();
  }

  // Przechodzenie do strony koszyka
  clickOnCart() {
    cy.get("#cartur").click(); // Selektor, który prowadzi do koszyka
  }
}

export default ProductPageObject;
