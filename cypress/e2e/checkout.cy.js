import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
/// <reference types="cypress" />

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
  creditNumber: '7256 1434 1734 9434',
  month: faker.date.month(),
  year: faker.date.past().getFullYear()
};

describe('Product', () => {
  before(() => {
    homePage.visit();
  });

    it('should be added to cart and purchased', () => {
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

      cartPage.typeCardnumder(user.creditNumber);

      cartPage.typeMonth(user.month);

      cartPage.typeYear(user.year);

      cartPage.clickOnPurchase();

      cartPage.confirmEnteredData(user.creditNumber, user.name);

      cartPage.clickOnOkModalWindow();
    });
  });

