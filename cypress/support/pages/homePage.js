class HomePage {
    visit() {
      cy.visit('https://www.demoblaze.com/');
    }

    clickLaptopsCategory() {
      cy.contains('Laptops').click();
    }
  }

  export default new HomePage();
