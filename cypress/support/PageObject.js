class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  assertUrl(pageUrl) {
    cy.url().should('contain', pageUrl);
  }

  clickOnLink(link) {
    cy.contains('.nav-link', link)
      .click();
  }

  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName)
      .click();
  }
}

export default PageObject;
