/// <reference types='cypress' />

import HomeAndCataloguePageObject from
  '../support/pages/homeСatalogue.pageObject';
import OrderFormPageObject from
'../support/pages/OrderForm.pageObject';
  import faker from 'faker';
 const homePage = new HomeAndCataloguePageObject();
 const orderForm = new OrderFormPageObject();

describe('Demoblaze POM', () => {

  const productData = {
    cartLink: 'Cart',
    categoryName: 'Laptops',
    productName: 'Sony vaio i7',
    message: 'Product added',
    successMessage: 'Thank you for your purchase!'
  };

  const orderData = {
    name: faker.name.firstName(),
    country: faker.address.country(),
    city: faker.address.city(),
    card: faker.finance.creditCardNumber(),
    month: faker.random.number({ min: 1, max: 12 }),
    year: faker.random.number({ min: 2013, max: 2033 }),
  }

  before(() => {
    homePage.visit();
  });

  it('should provide the ability to order', () => {
    homePage.clickOnCategory(productData.categoryName);
    homePage.clickOnProduct(productData.productName);
    homePage.clickBtn('Add to cart');
    homePage.assertAlert();

    homePage.clickOnLink(productData.cartLink);
    homePage.clickBtn('Place Order');
    orderForm.typeName(orderData.name);
    orderForm.typeCountry(orderData.country);
    orderForm.typeCity(orderData.city);
    orderForm.typeCard(orderData.card);
    orderForm.typeMonth(orderData.month);
    orderForm.typeYear(orderData.year);
    homePage.clickBtn('Purchase');
    orderForm.assertOrder();
  });
});
