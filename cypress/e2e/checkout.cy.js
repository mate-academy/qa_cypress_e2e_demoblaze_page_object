import OrderFormPageObject from '../support/pages/placeOrderForm.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const orderForm = new OrderFormPageObject();
const cartPage = new CartPageObject();
const productPage = new ProductPageObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.lorem.word(),
  city: faker.lorem.word(),
  card: faker.random.number({ min: 100000, max: 999999 }),
  month: faker.random.number({ min: 1, max: 12 }),
  year: faker.random.number({ min: 18, max: 99 }),

  productName: 'Sony vaio i7',
  successMessage: 'Product added'
};

describe('Demoblaze', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to purchase product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(testData.productName);

    productPage.addToCart();
    productPage.assertAllert(testData.successMessage);
    productPage.clickOnLink('Cart');

    cartPage.assertProduct(testData.productName);
    cartPage.clickOnPlaceOrder();

    orderForm.typeName(testData.name);
    orderForm.typeCountry(testData.country);
    orderForm.typeCity(testData.city);
    orderForm.typeCard(testData.card);
    orderForm.typeMonth(testData.month);
    orderForm.typeYear(testData.year);
    orderForm.clickOnPurchaseBtn();
    orderForm.assertModal(testData.name);
    orderForm.assertModal(testData.card);
    orderForm.clickOnOkBtn();
  });
});
