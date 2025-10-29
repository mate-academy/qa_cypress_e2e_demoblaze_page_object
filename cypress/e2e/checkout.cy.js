/// <reference types='cypress' />

import PageObject from '../support/PageObject';
const { faker } = require('@faker-js/faker');

const pageObject = new PageObject();

const name = faker.person.firstName();
const country = faker.location.country();
const city = faker.location.city();
const creditCard = faker.finance.creditCardNumber();
const month = faker.date.month();
const year = faker.number.int({ min: 1900, max: 2025 });

describe('checkout', () => {
  before(() => {
    cy.visit('');
  });

  it('should show entered data in modal window after purchasing', () => {
    pageObject.selectCategory('Laptops');
    pageObject.chooseSelector('.card-title', 'Sony vaio i7');
    pageObject.chooseSelector('a', 'Add to cart');
    pageObject.assertAllert('Product added');
    pageObject.chooseSelector('#cartur', 'Cart');
    pageObject.chooseSelector('a', 'Cart');
    pageObject.checkVisibility('td', 'Sony vaio i7');
    pageObject.chooseSelector('[data-target="#orderModal"]', 'Place Order');
    pageObject.typeTextInInput('#name', name);
    pageObject.typeTextInInput('#country', country);
    pageObject.typeTextInInput('#city', city);
    pageObject.typeTextInInput('#card', creditCard);
    pageObject.typeTextInInput('#month', month);
    pageObject.typeTextInInput('#year', year);
    pageObject.chooseSelector('button', 'Purchase');
    pageObject.checkVisibility('h2', 'Thank you for your purchase!');
    pageObject.checkVisibility('.lead', name);
    pageObject.checkVisibility('.lead', creditCard);
    pageObject.chooseSelector('button', 'OK');
  });
});
