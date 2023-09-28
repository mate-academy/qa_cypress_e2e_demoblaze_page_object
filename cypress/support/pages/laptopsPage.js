class LaptopsPage {
    clickOnProduct(productName) {
      cy.contains(productName).click();
    }
  }

  export default new LaptopsPage();
