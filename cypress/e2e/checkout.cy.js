/// <reference types='cypress' />
// eslint-disable-next-line max-len
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import { faker } from '@faker-js/faker';

const homePage = new HomeAndCataloguePageObject(); // Создаем экземпляр класса

const testData = {
  product: 'Sony vaio i7',
  category: 'Laptops',
  alertMessage: 'Product added',
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: Math.floor(Math.random() * (2024 - 1900 + 1)) + 1900,
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
    homePage.fillOrderForm(
      testData.name,
      testData.country,
      testData.city,
      testData.card,
      testData.month,
      testData.year
    );

    homePage.Purchase();
    homePage.assertModalContent(testData.name, testData.card);
    homePage.ConfirmOk();
  });
});
