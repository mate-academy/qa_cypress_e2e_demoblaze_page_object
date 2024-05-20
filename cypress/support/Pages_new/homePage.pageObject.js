class HomePage {
  visit() {
    cy.visit('');
  }

  clickTheLaptopLink() {
    cy.get('.list-group-item').contains('Laptops').click();
  }

  clickTheItemLink(productName) {
    cy.get('.card-title').contains(productName).click();
  }
}

export const homePage = new HomePage();
