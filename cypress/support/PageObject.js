class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  assertProductInCart(product) {
    cy.get('.table')
      .should('contain', product);
  };

  assertSuccessPurchase(successMessagee, creditCard, name) {
    cy.get('.sweet-alert')
      .should('contain', successMessagee)
      .and('contain', creditCard)
      .and('contain', name);
  }
}

export default PageObject;
