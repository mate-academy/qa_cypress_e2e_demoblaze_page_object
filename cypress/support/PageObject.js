class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  assertProductAdded(alertMessage) {
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added');
    });
  }

  assertProductInCart(productName) {
    cy.get('.table')
      .should('contain', productName);
  }

  assertOrderConfirmationModal(visible) {
    cy.get('.sweet-alert')
      .should('be.visible');
  }

  assertOrderConfirmationSuccess(message, cardNumber, name) {
    cy.get('.sweet-alert')
      .should('contain', message)
      .and('contain', cardNumber)
      .and('contain', name);
  }
}

export default PageObject;
