class LaptopsPage {
    clickSonyVaioI7() {
      cy.contains('Sony vaio i7').click();
    }
  }

  export default new LaptopsPage();
