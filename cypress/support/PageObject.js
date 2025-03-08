class PageObject {
  visit(url) {
    const baseUrl = Cypress.config('baseUrl');
    cy.visit(url || baseUrl);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }
}

export default PageObject;
