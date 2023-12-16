import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject
  from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import OrderFormPageObject
  from '../support/pages/orderForm.pageObject';
import { faker } from '@faker-js/faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const orderForm = new OrderFormPageObject();

const testData = {
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  card: faker.string.numeric(16),
  month: '12',
  year: '2023'
};

describe('checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should be able to order the product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.clickOnButton('Add to cart');
    productPage.assertAllert('Product added');
    productPage.clickOnLink('Cart');
    cartPage.assertCart('Sony vaio i7');
    cartPage.clickOnButton('Place Order');
    orderForm.typeName(testData.name);
    orderForm.typeCountry(testData.country);
    orderForm.typeCity(testData.city);
    orderForm.typeCreditCard(testData.card);
    orderForm.typeMonth(testData.month);
    orderForm.typeYear(testData.year);
    orderForm.clickOnButton('Purchase');
    orderForm.assertData(testData.name);
    orderForm.assertData(testData.card);
    orderForm.clickOnButton('OK');
  });
});
