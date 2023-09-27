/// <reference types='cypress' />

function randomCreditCard() {
  const min = 1000000000000000;
  const max = 9999999999999999;

  const randomCreditCardNumber =
   Math.floor(Math.random() * (max - min + 1)) + min;

  return randomCreditCardNumber.toString();
};

function randomFutureYear() {
  const currentYear = new Date().getFullYear();
  const futureYear =
   faker.random.number({ min: currentYear, max: currentYear + 10 });
  return futureYear;
};

const faker = require ('faker');

const user = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: randomCreditCard(),
  month: faker.date.month(),
  year: randomFutureYear()
};

describe('Demoblaze page', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('should provide the ability to make an order', () => {
    cy.contains('Laptops').click();
    cy.contains('Sony vaio i7').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });

    cy.contains('Cart').click();
    cy.contains('Sony vaio i7');

    cy.contains('Place Order').click();
    cy.get('#name').type(user.name);
    cy.get('#country').type(user.country);
    cy.get('#city').type(user.city);
    cy.get('#card').type(user.creditCard);
    cy.get('#month').type(user.month);
    cy.get('#year').type(user.year);

    cy.contains('Purchase').click();
    cy.get('.sweet-alert').should('contain', user.name);
    cy.get('.sweet-alert').should('contain', user.creditCard);

    cy.get('.confirm').click();
  });
});
