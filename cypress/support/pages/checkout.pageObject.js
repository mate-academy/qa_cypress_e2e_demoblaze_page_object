import PageObject from '../PageObject';
import faker from 'faker';

const order = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.random.number({ min: 2000, max: 2023 })
};

class CheckoutPageObject extends PageObject {
  clickOnCategory() {
    cy.get(`[onclick="byCat('notebook')"]`)
      .click();
  }

  clickOnLaptop() {
    cy.contains('.card-title', 'Sony vaio i7')
      .click();
  }

  clickOnAddToCartBtn() {
    cy.get('.col-sm-12 > .btn')
      .click();
  }

  acessAlert() {
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added`);
    });
  }

  clickOnCart() {
    cy.get('#cartur')
      .click();
  }

  clickOnPlaceOrderBtn() {
    cy.get('.col-lg-1 > .btn')
      .click();
  }

  fillPlaceOrderForm() {
    cy.get('#name')
      .type(order.name);
    cy.get('#country')
      .type(order.country);
    cy.get('#city')
      .type(order.city);
    cy.get('#card')
      .type(order.card);
    cy.get('#month')
      .type(order.month);
    cy.get('#year')
      .type(order.year);
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
      .click();
  }

  assertEnteredDataIsShown() {
    cy.get('.sweet-alert')
      .should('contain', order.card)
      .should('contain', order.name)
      .should('contain', 'Thank you for your purchase!');
  }

}
export default CheckoutPageObject;

