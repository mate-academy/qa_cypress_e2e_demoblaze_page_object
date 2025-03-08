class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  clickOnButton(name) {
    cy.contains('.btn', name)
      .click();
  }
}

export default PageObject;
