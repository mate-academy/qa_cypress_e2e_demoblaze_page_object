class MainPage {
  visit() {
    cy.visit('');
  }

  clickTheLaptopLink() {
    cy.get('.list-group-item').contains('Laptops').click();
  }

  clickTheItemLink(productName) {
    cy.get('.card-title').contains(productName).click();
  }
};

export const mainPage = new MainPage();
