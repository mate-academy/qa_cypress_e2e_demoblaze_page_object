class HomePage {
  visit() {
    cy.visit('https://www.demoblaze.com/');
  }

  clickOnLink(linkText) {
    cy.get('a').contains(linkText).click(); // ✅ restrict to <a> tags
  }

  clickLaptops() {
    cy.contains('Laptops').click();
  }

  selectProduct(productName) {
    cy.contains(productName).click();
  }
}

export default HomePage;
