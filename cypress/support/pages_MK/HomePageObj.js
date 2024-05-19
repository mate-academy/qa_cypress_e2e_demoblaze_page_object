class GoToLaptop {
  visit() {
    cy.visit('');
  }

  reachLaptopPage() {
    cy.get('.list-group-item').contains('Laptops').click();
  }

  reachItemPage(productName) {
    cy.get('.card-title').contains(productName).click();
  }
};

export const goToLaptop = new GoToLaptop();
