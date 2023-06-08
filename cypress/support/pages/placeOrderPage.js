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

  clickOnPurchaseBtn() {
    cy.contains('.btn', 'Purchase')
      .click();
  }

  clickOnCloseBtn() {
    cy.contains('.btn', 'Close')
      .click();
  }

  assertPurchase(message) {
    cy.get('h2')
      .should('contain', message);
  }

  confirmPurchase() {
    cy.contains('.btn', 'OK')
      .click();
  }
};

export default PlaceOrderPage;
