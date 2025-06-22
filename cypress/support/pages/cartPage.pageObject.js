import PageObject from '../PageObject';
import { faker } from '@faker-js/faker';

class CartPage extends PageObject {
  url = '/cart.html#';

  assertProduct(productName) {
    cy.get('tbody tr').contains(productName).should('exist');
  }

  clickPlaceOrderBttn() {
    cy.contains('button.btn.btn-success', 'Place Order').click();
  }

  fillOrderFormAndPurchase() {
    const orderData = {
      name: faker.name.fullName(),
      country: faker.location.country(),
      city: faker.location.city(),
      card: faker.finance.creditCardNumber(),
      month: faker.date.month(),
      year: faker.date.future().getFullYear()
    };

    cy.get('#name').type(orderData.name);
    cy.get('#country').type(orderData.country);
    cy.get('#city').type(orderData.city);
    cy.get('#card').type(orderData.card);
    cy.get('#month').type(orderData.month);
    cy.get('#year').type(orderData.year);

    cy.contains('button', 'Purchase').click();
  }

  assertConfirmationMessage() {
    cy.contains('h2', 'Thank you for your purchase!').should('be.visible');
  }

  clickOkButton() {
    cy.get('.confirm').click();
  }
}

export default CartPage;
