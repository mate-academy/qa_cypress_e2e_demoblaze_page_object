class HomePage {
  visit(url = '/') {
    cy.visit(url);
    return this;
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName).click();
    return this;
  }

  clickOnProduct(productName) {
    cy.contains('.hrefch', productName).click();
    return this;
  }
}

export default HomePage;
