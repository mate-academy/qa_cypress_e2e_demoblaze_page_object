/// <reference types='cypress' />
//import { BuyproductPageObject } from '.buyproduct.PageObject';
import { BuyProductPageObject } from '../support/pages/buyproduct.PageObject';
const { faker } = require('@faker-js/faker');
const buyProduct = new BuyProductPageObject();
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
    buyProduct.choosingCategory;
    buyProduct.chooseItem(item);
    buyProduct.addToCart;
    buyProduct.assertAllertMessage(message);
    buyProduct.goToCart;
    buyProduct.wait2SecForItemAppearInCart;
    buyProduct.aseertItemIsAdded(item);
    buyProduct.clickBtnPlaseOrder;
    buyProduct.selectNameField.type(checkoutData.name);
    buyProduct.selectCountryField.type(checkoutData.country);
    buyProduct.selectCityField.type(checkoutData.city);
    buyProduct.selectCardField.type(checkoutData.card);
    buyProduct.selectMonthField.type(checkoutData.month);
    buyProduct.selectYearField.type(checkoutData.year);
    buyProduct.clickPurchaseBtn;
    buyProduct.assertModalWinHasCardNumber(checkoutData.card);
    buyProduct.assertModalWinHasCustomerName(checkoutData.name);
    buyProduct.clickOkBtn;
  });
});
