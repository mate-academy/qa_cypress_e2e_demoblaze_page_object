class homePage {
  visit() {
    cy.visit('https://www.demoblaze.com/');
  }

  clickLaptopsCategory() {
    cy.contains('Laptops').click();
  }

  GoToCart() {
    cy.contains('Cart').click();
  }
}

export default new homePage();