class laptopsPage {
  clickOnSonyVaioi7() {
    cy.contains('Sony vaio i7').click();
  }
}

export default new laptopsPage();