import PageObject from '../PageObject';
import faker from 'faker';

class PlaceOrder extends PageObject {
  url = '/cart.html';

  generateOrderData() {
    return {
      name: faker.name.firstName(),
      country: faker.address.country(),
      city: faker.address.city(),
      creditCard: faker.finance.creditCardNumber(),
      month: faker.date.month(),
      year: faker.date.future().getFullYear()
    };
  }

  placeOrder() {
    cy.contains('.btn', 'Place Order').click();
  }

  data = this.generateOrderData();

  fillOrderForm() {
    cy.findInputId('name')
      .type(this.data.name);
    cy.findInputId('country')
      .type(this.data.country);
    cy.findInputId('city')
      .type(this.data.city);
    cy.findInputId('card')
      .type(this.data.creditCard);
    cy.findInputId('month')
      .type(this.data.month);
    cy.findInputId('year')
      .type(this.data.year);
  }

  clickPurchase() {
    cy.contains('.btn', 'Purchase')
      .click();
  }

  assertDataOnModal() {
    cy.get('.lead')
      .should('contain', this.data.name)
      .and('contain', this.data.creditCard);
  }

  clickOKonModal() {
    cy.contains('.btn', 'OK')
      .click();
  }
}

export default PlaceOrder;
