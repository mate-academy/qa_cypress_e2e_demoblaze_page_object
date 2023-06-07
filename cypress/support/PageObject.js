class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  assertProductInCart(productName) {
    cy.get('.table')
      .should('contain', productName);
  }

  assertModalSuccess(message, cardNumber, name) {
    cy.get('.sweet-alert')
      .should('contain', message)
      .and('contain', cardNumber)
      .and('contain', name);
  }
}

export default PageObject;
