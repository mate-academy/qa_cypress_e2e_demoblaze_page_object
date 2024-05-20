import 'cypress-wait-until';

class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.on('window:alert', (text) => {
      expect(text).to.contains(alertMessage);
    });
  }
}

export default PageObject;
