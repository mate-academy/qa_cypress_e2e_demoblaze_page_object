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
    cy.get('#tbodyid')
      .should('contain', productName);
  }

  assertPurchaseSuccess(message, cardNumber, name) {
    cy.get('.sweet-alert')
      .should('contain', message)
      .and('contain', cardNumber)
      .and('contain', name);
  }
}

export default PageObject;
