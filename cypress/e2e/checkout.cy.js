/// <reference types='cypress' />

import { faker } from '@faker-js/faker';
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();

const testData = {
  userName: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: '10',
  year: '24'
};

describe('The user order flow', () => {
  before(() => {
    homePage.visit();
  });

  it('Should make an order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.addToCart();
    homePage.assertAllert('Product added');

    homePage.clickOnLink('Cart');
    homePage.assertInCart();
    homePage.placeOrder();
    homePage.fillOrderForm(testData.userName, testData.country,
      testData.city, testData.creditCard, testData.month, testData.year
    );

    homePage.purchaseOrder();
    homePage.assertModal();
    homePage.confirmBtn();
  });
});
