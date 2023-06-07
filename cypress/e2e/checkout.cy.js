import CartPageObject from '../support/pages/cart.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
/// <reference types="cypress" />

const faker = require('faker');
const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cart = new CartPageObject();

const testData = {
  categoryName: 'Laptops',
  productName: 'Sony vaio i7',
  successMessage: 'Product added',
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.datatype.number({
    min: 2023,
    max: 2030
  })
}
describe('Checkout flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to add to the cart product and to checkout product', () => {
    homePage.clickOnCategory(testData.categoryName);
    homePage.clickOnProduct(testData.productName);
    productPage.clickOnButton('Add to cart');
    productPage.assertAllert(testData.successMessage);
    homePage.clickOnLink('Cart');
    cart.checkProduct(testData.productName);
    productPage.clickOnButton('Place Order');
    cart.name.type(testData.name);
    cart.country.type(testData.country);
    cart.city.type(testData.city);
    cart.card.type(testData.card);
    cart.month.type(testData.month);
    cart.year.type(testData.year);
    cart.purchase.click();
    cart.checkProductInCart(testData.name, testData.card);
    productPage.clickOnButton('OK');
  });
});
