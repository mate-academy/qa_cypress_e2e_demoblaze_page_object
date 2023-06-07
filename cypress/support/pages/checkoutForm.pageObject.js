import PageObject from '../PageObject';

class CheckoutFormPageObject extends PageObject {
  url = '/index.html';

  checkProduct(product) {
    cy.get('.success')
      .should('contain', product);
  }

  get userName() {
    return cy.get('#name');
  }

  get userCountry() {
    return cy.get('#country');
  }

  get userCity() {
    return cy.get('#city');
  }

  get userCard() {
    return cy.get('#card');
  }

  get cardMonth() {
    return cy.get('#month');
  }

  get cardYear() {
    return cy.get('#year');
  }

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }
}

export default CheckoutFormPageObject;
