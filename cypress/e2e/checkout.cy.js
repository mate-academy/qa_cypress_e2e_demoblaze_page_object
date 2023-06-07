import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import faker from 'faker';
import ProductPageObject from "../support/pages/product.pageObject";
import CartPageObject from "../support/pages/cart.pageObject";
/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();


const testData = {
  categoryName: 'Laptops',
  productName: 'Sony vaio i5',
  successMessage: 'Product added',
  user : {
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    country: faker.address.country(),
    city: faker.address.city(),
    creditCard: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: Math.floor(2023 + Math.random() * 10)
  }
};


describe('Product', () => {
  before(() => {
    homePage.visit();
  });

  it('user is able add to card product and purshase product', () => {
    homePage.clickOnCategory(testData.category);

    homePage.clickOnProduct(testData.product);

    productPage.clickOnAddBtn();

    productPage.assertAlert('Product added');

    homePage.clickOnLink('Cart');

    cartPage.confirmTheProduct(testData.product);

    cartPage.clickOnOrder();

    cartPage.typeName(testData.user.name);

    cartPage.typeCountry(testData.user.country);

    cartPage.typeCity(testData.user.city);

    cartPage.typeCardnumder(testData.user.creditCard);

    cartPage.typeMonth(testData.user.month);

    cartPage.typeYear(testData.user.year);

    cartPage.clickOnPurchase();

    cartPage.confirmEnteredData(testData.user.creditNumber, testData.user.name);

    cartPage.clickOnOkModalWindow();
  });
});
