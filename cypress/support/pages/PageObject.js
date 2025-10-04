class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAlert(expectedMessage) {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contain(expectedMessage);
    });
  }
}

export default PageObject;
