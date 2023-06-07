import OrderFormPageObject from '../support/pages/orderForm.pageObject';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
/// <reference types="cypress" />

const orderForm = new OrderFormPageObject();
const homePage = new HomeAndCataloguePageObject();

const orderData = {
  name: faker.name.firstName(),
  country: faker.random.word(),
  city: faker.random.word(),
  creditCard: '1111-1111-1111-1111',
  month: faker.random.word(),
  year: 2023,
  successMessage: 'Thank you for your purchase!'
};

describe('Users purchasing flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to ...', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnBtn('Add to cart');
    homePage.clickOnLink('Cart');
    homePage.assertAllert('Product added');
    homePage.clickOnBtn('Place Order');

    orderForm.nameField
      .type(orderData.name);
    orderForm.countryField
      .type(orderData.country);
    orderForm.cityField
      .type(orderData.city);
    orderForm.creditCardField
      .type(orderData.creditCard);
    orderForm.monthField
      .type(orderData.month);
    orderForm.yearField
      .type(orderData.year);
    homePage.clickOnBtn('Purchase');

    orderForm.confirmBtn
      .click();
  });
});
