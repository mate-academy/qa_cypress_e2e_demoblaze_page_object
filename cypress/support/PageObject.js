export default class PageObject {
  visit(url) {
    cy.visit(url);
    return this;
  }

  getElement(selector) {
    return cy.get(selector);
  }

  clickElement(selector) {
    return cy.get(selector).click();
  }

  typeText(selector, text) {
    return cy.get(selector).type(text);
  }
}
