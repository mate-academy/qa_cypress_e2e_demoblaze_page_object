class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  clickOnButton(button) {
    cy.contains('.btn', button)
      .click();
  }
}

export default PageObject;
