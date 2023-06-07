import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

const testData = {
  productData: {
    categoryName: 'Laptops',
    productName: 'Sony vaio i7'
  },
  dataForOrder: {
    name: 'John Cena',
    country: 'USA',
    city: 'New York',
    creditCard: 1212343456566767,
    month: 5,
    year: 2000
  }
};

describe('Demoblaze', () => {
  before(() => {
    homePage.visit();
  });

  it('should make a order', () => {
    homePage.clickOnCategory(testData.productData.categoryName);
    homePage.clickOnProduct(testData.productData.productName);
    homePage.clickOnAddButton('Add to cart');
    homePage.assertAllertAddProduct();
    homePage.clickOnLink('Cart');

    cartPage.assertNameOfProduct(testData.productData.productName);
    cartPage.clickOnOrderButton('Place Order');
    cartPage.fillNameForOrder(testData.dataForOrder.name);
    cartPage.fillCountryForOrder(testData.dataForOrder.country);
    cartPage.fillCityForOrder(testData.dataForOrder.city);
    cartPage.fillCardForOrder(testData.dataForOrder.creditCard);
    cartPage.fillMonthForOrder(testData.dataForOrder.month);
    cartPage.fillYearForOrder(testData.dataForOrder.year);
    cartPage.clickOnPurchaseButton('Purchase');
    cartPage.assertDataForOrder(
      testData.dataForOrder.name,
      testData.dataForOrder.creditCard);
    cartPage.clickOnConfirmButton('OK')
  });
});
