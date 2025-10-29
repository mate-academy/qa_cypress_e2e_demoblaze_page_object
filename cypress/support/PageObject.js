class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  selectCategory(category) {
    cy.contains(`[onclick="byCat('${category === 'Laptops' ? 'notebook' : category}')"]`, category)
      .click();
  }

  chooseSelector(selector, text) {
    cy.contains(selector, text)
      .click();
  }

  checkVisibility(selector, text) {
    cy.contains(selector, text)
      .should('be.visible');
  }

  typeTextInInput(selector, text) {
    cy.get(selector)
      .type(text);
  }
}

export default PageObject;
