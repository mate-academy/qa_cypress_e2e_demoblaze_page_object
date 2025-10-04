class HomePage {
  visit() {
    cy.visit('https://www.demoblaze.com/');
  }

  clickLaptops() {
    cy.get('a').contains('Laptops').click();
  }

  selectProduct(productName) {
    cy.get('#tbodyid .card-title').contains(productName).click();
  }

  clickOnLink(linkText) {
    cy.get('a').contains(linkText).click();
  }
}
export default HomePage;
