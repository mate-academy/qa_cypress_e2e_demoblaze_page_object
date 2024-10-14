/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import { faker } from '@faker-js/faker';

const homePage = new HomeAndCataloguePageObject();
const contactForm = new ContactFormPageObject();
const testData = {
  product: 'Sony vaio i7',
  category: 'Laptops',
  alertMessage: 'Product added',
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: '12',
  year: '2024',
  successMessage: 'Thanks for the message!!'
};

describe('Demoblaze Checkout Flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should complete checkout flow', () => {

    homePage.clickOnCategory(testData.category);

    homePage.clickOnProduct(testData.product);

    homePage.addToCart();
    homePage.assertAllert(testData.alertMessage);


    homePage.clickOnCart();
    homePage.placeOrder();
    homePage.fillOrderForm(testData.name,
        testData.country,
        testData.city,
        testData.card,
        testData.month,
        testData.year);


    homePage.Purchase();
    homePage.assertModalContent(testData.name, testData.card);

    homePage.ConfirmOk();
  });
});

