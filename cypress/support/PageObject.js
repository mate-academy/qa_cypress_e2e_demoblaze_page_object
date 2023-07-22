class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  verifyProductInCart(product) {
    cy.contains(product).should('exist');
  }
}

export default PageObject;
