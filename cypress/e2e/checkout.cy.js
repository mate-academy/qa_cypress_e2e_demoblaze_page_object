import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import ProdPagePageObject from '../support/pages/prodPage.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
const homePage = new HomeAndCataloguePageObject();
const productPage = new ProdPagePageObject();
const cartPage = new CartPageObject();
const { faker } = require('@faker-js/faker');
const testData = {
  categoryName: 'Laptops',
  product: 'Sony vaio i7',
  message: 'Product added',
  cartLinkName: 'Cart',
  customerName: faker.person.firstName(),
  customerCountry: 'USA',
  customerCity: 'NY',
  customerCardNo: faker.finance.creditCardNumber(),
  cardMonth: faker.number.int({ min: 1, max: 12 }),
  cardYear: faker.number.int({ min: 1900, max: 2012 })
};
/// <reference types='cypress' />

describe('checkout flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should add the product to the cart', () => {
    homePage.clickOnCategory(testData.categoryName);
    homePage.clickOnProduct(testData.product);
    productPage.addToCart();
    productPage.assertAllert(testData.message);
    homePage.clickOnLink(testData.cartLinkName);
    cartPage.assertProductInCart(testData.product);
    cartPage.placeOrder();
    cartPage.fillTheForm(
      testData.customerName,
      testData.customerCountry,
      testData.customerCity,
      testData.customerCardNo,
      testData.cardMonth,
      testData.cardYear
    );
    cartPage.assertPurchaseInfo(testData.customerName);
    cartPage.closePurchaseModal();
  });
});
