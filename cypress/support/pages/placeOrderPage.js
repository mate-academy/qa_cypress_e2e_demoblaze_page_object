import ProductPage from './productPage';

class PlaceOrderPage extends ProductPage {
  get nameInput() {
    return cy.get('#name');
  }

  get countryInput() {
    return cy.get('#country');
  }

  get cityInput() {
    return cy.get('#city');
  }

  get creditCardInput() {
    return cy.get('#card');
  }

  get monthInput() {
    return cy.get('#month');
  }

  get yearInput() {
    return cy.get('#year');
  }

  clickOnPurchase() {
    cy.contains('.btn', 'Purchase')
      .click();
  }

  clickOnClose() {
    cy.contains('.btn', 'Close')
      .click();
  }

  assertPurchase(message) {
    cy.contains('h2', message);
  }

  confirmPurchase() {
    cy.contains('.btn', 'OK')
      .click();
  }
};

export default PlaceOrderPage;
