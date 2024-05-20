/* eslint-disable max-len */
/// <reference types='cypress' />
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import PageObject from '../support/PageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import { faker } from '@faker-js/faker';

describe('checkout', () => {
  const homePage = new HomeAndCataloguePageObject();
  const pageObject = new PageObject();
  const cartPage = new CartPageObject();

  const testData = {
    name: faker.person.firstName(),
    country: faker.location.country(),
    city: faker.location.city(),
    creditCard: faker.finance.creditCardNumber(),
    month: Math.floor(Math.random() * 13),
    year: '200' + Math.floor(Math.random() * 9),
    successMessage: 'Product added'
  };

  before(() => {
    homePage.visit();
  });

  it('is able to sell a product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.addToCartBtn.click();

    pageObject.assertAllert(testData.successMessage);

    homePage.clickOnLink('Cart');
    cartPage.findProductInCart('Sony vaio i7');
    cartPage.Btn('Place Order');
    cartPage.NameInput.type(testData.name);
    cartPage.CountryInput.type(testData.country);
    cartPage.CityInput.type(testData.city);
    cartPage.CreditCardInput.type(testData.creditCard);
    cartPage.MonthInput.type(testData.month);
    cartPage.YearInput.type(testData.year);

    cartPage.Btn('Purchase');

    cartPage.OrderInformation(testData.creditCard);
    cartPage.OrderInformation(testData.name);
    cartPage.OkBtn.click();
  });
});
