class HomePage {
  visitHomePage() {
    cy.visit('');
  }

  clickProductLink() {
    cy.get('.hrefch').contains('Sony vaio i7').click();
  }

  clickProductPage() {
    cy.get('.list-group-item').contains('Laptops').click();
  }
}

export const homePage = new HomePage();
