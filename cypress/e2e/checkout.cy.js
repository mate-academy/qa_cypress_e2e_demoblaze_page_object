import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import { faker } from '@faker-js/faker';

/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const categoryName = 'Laptops';
const product = 'Sony vaio i7';
const testMessage = 'Product added';
const cart = 'Cart';
const item = 'Sony vaio i7';
const user = {
  name: faker.name.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: {
    number: faker.finance.creditCardNumber(),
    expirationMonth: faker.date.month(),
    expirationYear: faker.date.future({ years: 5 }).getFullYear()
  }
};

describe('Visit the home page', () => {
  before(() => {
    homePage.visit('/');
  });

  it('Should complete a flow', () => {
    homePage.clickOnCategory(categoryName);

    homePage.clickOnProduct(product);

    homePage.clickOnBtnAddToCart();

    homePage.assertAllert(testMessage);

    homePage.clickOnCart(cart);

    homePage.itemInCart(item);

    homePage.clickOnBtnPlaceOrder();

    homePage.fillName(user.name);

    homePage.fillCountry(user.country);

    homePage.fillCity(user.city);

    homePage.fillnumber(user.creditCard.number);

    homePage.fillexpirationMonth(user.creditCard.expirationMonth);

    homePage.fillexpirationYear(user.creditCard.expirationYear);

    homePage.clickOnBtnPurchase();

    homePage.modalWindow(user.name, user.creditCard.number);

    homePage.clickOnBtnOk();
  });
});
