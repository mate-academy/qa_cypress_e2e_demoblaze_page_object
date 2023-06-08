/// <reference types="cypress" />

import faker from 'faker';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

const testData = {
  category: 'Laptops',
  product: 'Sony vaio i7'
};

const user = {
  name: faker.name.findName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditNumber: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.past().getFullYear()
};

describe('Product', () => {
  before(() => {
    homePage.visit('/');
  });

  it('should to add product to the Cart and purchase', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);

    productPage.clickOnAddBtn();
    productPage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.confirmTheProduct(testData.product);

    cartPage.clickOnOrder();
    cartPage.typeName(user.name);
    cartPage.typeCountry(user.country);
    cartPage.typeCity(user.city);
    cartPage.typeCardnumber(user.creditNumber);
    cartPage.typeMonth(user.month);
    cartPage.typeYear(user.year);
    cartPage.clickOnPurchase();
    cartPage.confirmEnteredData(user.creditNumber, user.name);
    cartPage.clickOnOkModalWindow();
  });
});
