/// <reference types='cypress' />
//import { productPagePageObject } from '.productPage.PageObject';
import { cartPageObject } from '../support/pages/cart.PageObject';
import { ProductPageObject } from '../support/pages/productPage.PageObject';
const { faker } = require('@faker-js/faker');
const productPage = new ProductPageObject();
const cartPage = new cartPageObject();
let user;
describe('Demo Blaze Store', () => {
  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
    cy.visit('/');
  });

  const checkoutData = {
    name: faker.person.firstName(),
    country: faker.location.country(),
    city: faker.location.city(),
    card: faker.finance.creditCardNumber(),
    month: Math.floor(Math.random() * 13),
    year: 2021 + Math.floor(Math.random() * 4),
  };

  it('should provide the ability to purchase a product', () => {
    const item = 'Sony vaio i7';
    const message = 'Product added';
    const category = 'Laptops';
    productPage.choosingCategory(category);
    productPage.wait2SecForItemAppear;
    productPage.chooseItem(item);
    productPage.addToCart;
    productPage.assertAllertMessage(message);
    productPage.goToCart;
    productPage.wait2SecForItemAppearInCart;
    cartPage.aseertItemIsAdded(item);
    cartPage.clickBtnPlaseOrder;
    cartPage.selectNameField.type(checkoutData.name);
    cartPage.selectCountryField.type(checkoutData.country);
    cartPage.selectCityField.type(checkoutData.city);
    cartPage.selectCardField.type(checkoutData.card);
    cartPage.selectMonthField.type(checkoutData.month);
    cartPage.selectYearField.type(checkoutData.year);
    cartPage.clickPurchaseBtn;
    cartPage.assertModalWinHasCardNumber(checkoutData.card);
    cartPage.assertModalWinHasCustomerName(checkoutData.name);
    cartPage.clickOkBtn;
  });
});
