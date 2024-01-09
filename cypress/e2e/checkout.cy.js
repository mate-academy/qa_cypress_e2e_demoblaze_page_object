/// <reference types='cypress' />

import HomeAndCataloguePageObject from "../support/pages/homeCatalogue.pageObject";
import faker from 'faker';
import ProductPageObject from "../support/pages/product.pageObject";
import CartPageObject from "../support/pages/cart.pageObject";

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

const user = {
  name: faker.name.findName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditNumber: '1111 2222 3333 4444',
  month: faker.date.month(),
  year: faker.date.past().getFullYear(),
}

const testData = {
  category: 'Laptops',
  product: 'Sony vaio i7',
}

describe('Purchase flow', () => {
  before(() => {
    homePage.visit();
  });

  it('add product to the cart and purchase', () => {
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