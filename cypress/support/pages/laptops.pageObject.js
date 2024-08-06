class LaptopsPage {
  clickTheCategory() {
    cy.get('.card-title').contains('Sony vaio i7').click();
  }

  addToCart() {
    cy.get('.btn.btn-success.btn-lg').contains('Add to cart').click();
  }

  assertAlert(alertMessage) {
    cy.on('window.alert', (alertText) => {
      expect(alertText).to.equal(alertMessage);
    });
  }
}

export default LaptopsPage;
