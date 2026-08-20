class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAlert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.contain(alertMessage);
    });
  }
}

export default PageObject;
