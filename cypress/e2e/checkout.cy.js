import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import { faker } from '@faker-js/faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

const testData = {
  product: 'Sony vaio i7',
  successMessage: 'Product added',
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: '08',
  year: '2026'
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to purchase a product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(testData.product);

    productPage.clickOnAddToCartBtn();
    productPage.assertAllert(testData.successMessage);

    homePage.clickOnLink('Cart');

    cartPage.assertProductInCart(testData.product);
    cartPage.clickOnPlaceOrderBtn();

    cartPage.typeName(testData.name);
    cartPage.typeCountry(testData.country);
    cartPage.typeCity(testData.city);
    cartPage.typeCreditCard(testData.card);
    cartPage.typeMonth(testData.month);
    cartPage.typeYear(testData.year);

    cartPage.clickOnPurchaseBtn();

    cartPage.assertPurchaseData(testData);
    cartPage.clickOnOkBtn();
  });
});
