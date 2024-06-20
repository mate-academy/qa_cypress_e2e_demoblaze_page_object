import faker from 'faker';
import CartPageObject
  from '../support/pages/Cart.pageObject';
/// <reference types='cypress' />

const cartPage = new CartPageObject();

describe('Demoblaze', () => {
  before(() => {
    cartPage.visit();
  });

  const testData = {
    name: faker.name.findName(),
    country: faker.address.country(),
    city: faker.address.city(),
    card: faker.finance.creditCardNumber(),
    month: faker.date.month()
  };

  it('should add item to cart and place order', () => {
    cartPage.clickOnCategory('Laptops');
    cartPage.clickOnProduct('Sony vaio i7');
    cy.contains('.btn', 'Add to cart').click();

    cartPage.assertAllert('Product added');

    cartPage.clickOnLink('Cart');
    cy.contains('.success', 'Sony vaio i7');
    cy.contains('.btn', 'Place Order').click();

    cartPage.typeInField('#name', testData.name);
    cartPage.typeInField('#country', testData.country);
    cartPage.typeInField('#city', testData.city);
    cartPage.typeInField('#card', testData.card);
    cartPage.typeInField('#month', testData.month);
    cartPage.typeInField('#year', '2023');
    cy.contains('.btn', 'Purchase').click();

    cy.contains('.lead', testData.card);
    cy.contains('.confirm', 'OK').click();
  });
});
