/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CartFormPageObject from '../support/pages/cartForm.pageObject';
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const cartForm = new CartFormPageObject();
const fakeData = {
  name: faker.name.findName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear()
};

describe('Purchase flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should order a laptop', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnBtn('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('.success')
      .contains('Sony vaio i7');
    homePage.clickOnBtn('Place Order');
    cartForm.typeName(fakeData.name);
    cartForm.typeCountry(fakeData.country);
    cartForm.typeCity(fakeData.city);
    cartForm.typeCreditCard(fakeData.creditCard);
    cartForm.typeMonth(fakeData.month);
    cartForm.typeYear(fakeData.year);
    cartForm.clickOnPurchaseBtn();
    cy.get('.sweet-alert')
      .should('be.visible');
    cy.get('.lead')
      .should('contain', fakeData.name);
    cy.get('.lead')
      .should('contain', fakeData.creditCard);
    homePage.clickOnBtn('OK');
  });
});
