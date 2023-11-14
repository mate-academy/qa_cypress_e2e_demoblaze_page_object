import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
  import faker from 'faker';
import PlaceOrder from '../support/pages/placeOrder.pageObject';
/// <reference types='cypress' />
const homePage = new HomeAndCataloguePageObject();
const order = new PlaceOrder();
const category = 'Laptop';
const product = 'Sony vaio i7';
const addedProduct = 'Product added';
const monthYear = ['01','02','03','04','05','06','07','08','09','10','11','12'];
const randomIndex = Math.floor(Math.random() * 11);
const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: '0123456789',
  month: monthYear[randomIndex],
  year: '1987'
};
const price = '790';

describe('Purchase an item', () => {
  before(() => {
    cy.visit('/');
  });

  it('should provide an ability to place an order', () => {
    homePage.clickOnCategory(category);
    homePage.clickOnProduct(product);
    homePage.clickAddToCartBtn();
    homePage.assertAddedproduct();
    homePage.clickACart();
    order.visit();
    order.assertItemName();
    order.assertItemPrice();
    order.clickPlaceOrder();
    order.fillName(testData.name);
    order.fillCountry(testData.country);
    order.fillCity(testData.city);
    order.fillCreditCard(testData.creditCard);
    order.fillMonth(testData.month);
    order.fillYear(testData.year);
    order.clickPurchaseBtn();
    order.assertOrderAmount(price);
    order.assertOrderCreditCard(testData.creditCard);
    order.assertOrderName(testData.name);
    order.clickOkBtn();
  });
});
