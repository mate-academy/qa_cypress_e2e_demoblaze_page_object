class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  clickOnCart() {
    cy.contains('.nav-link', 'Cart')
      .click();
  }
}

export default PageObject;
