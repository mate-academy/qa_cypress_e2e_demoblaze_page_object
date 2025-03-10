class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickCartLink() {
    this.clickOnLink('Cart');
  }
}

export default PageObject;
