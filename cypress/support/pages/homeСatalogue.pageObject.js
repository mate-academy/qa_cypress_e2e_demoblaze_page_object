import PageObject from "../PageObject";

class HomeAndCataloguePageObject extends PageObject {
  url = "/index.html";

  clickOnCategory(categoryName) {
    cy.contains("#itemc", categoryName).click();
  }

  clickOnProduct(product) {
    cy.contains(".hrefch", product).click();
  }
}

export default HomeAndCataloguePageObject;
