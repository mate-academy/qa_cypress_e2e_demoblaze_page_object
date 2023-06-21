class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  clickOnBtn(btnName) {
    cy.contains('.btn', btnName)
      .click();
  }
}

export default PageObject;
