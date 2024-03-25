/// <reference types='cypress' />

import { CheckoutPageObject } from '../support/pages/checkout.pageObject';

describe('Demoblaze app', () => {
  let customer;

  beforeEach(() => {
    cy.task('generateCustomer').then((generateCustomer) => {
      customer = generateCustomer;
    });
  });

  it('should provide an ability to buy an itemm', () => {
    const checkoutPage = new CheckoutPageObject();
    checkoutPage.visit();

    cy.get('.list-group-item').contains('Laptops').click();
    cy.get('[href="prod.html?idp_=9"]').contains('Sony vaio i7').click();
    cy.get('.btn.btn-success.btn-lg').click();

    cy.on('window:alert', (confirmText) => {
      expect(confirmText).to.equal('Product added');
    });

    cy.get('#cartur', { timeout: 5000 }).click();
    cy.get('.success', { timeout: 5000 }).should('contain', 'Sony vaio i7');
    cy.get('.btn-success').click();

    checkoutPage.fillCustomerData(customer);
    checkoutPage.purchase();
    checkoutPage.verifyPurchaseConfirmation(customer);
  });
});
