/// <reference types='cypress' />
import faker from 'faker';

const testData = {
  name: faker.name.firstName(),
  country: faker.random.words(),
  city: faker.random.words(),
  card: faker.finance.creditCardNumber(),
  year: 2023,
  month: 12
};

describe('should have', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should pass all checks', () => {
    cy.contains('Laptops').click();
    cy.contains('Sony vaio i7').click();
    cy.contains('Add to cart').click();

    cy.on('window:alert', (alert) => {
      expect(alert).to.equal(`Product added`);
    });
    cy.get('#cartur').click();
    cy.get('.success > :nth-child(2)').should('contain', 'Sony vaio i7');
    cy.get('.col-lg-1 > .btn').click();
    cy.get('#name').type(testData.name);
    cy.get('#country').type(testData.country);
    cy.get('#city').type(testData.city);
    cy.get('#card').type(testData.card);
    cy.get('#month').type(testData.year);
    cy.get('#year').type(testData.month);
    // eslint-disable-next-line max-len
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
      .click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cy.get('.sweet-alert > h2')
      .should('contain', 'Thank you for your purchase!');
    cy.get('.confirm').click();
  });
});
