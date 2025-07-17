/* eslint-disable max-len */
/// <reference types='cypress' />

import { faker } from '@faker-js/faker';
import CartPageObject from '../support/pages/cart.pageObject';
import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import PlaceOrderFromPajeObject from '../support/pages/placeOrderForm.pageObject';

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();
const placeOrderForm = new PlaceOrderFromPajeObject();

const productName = 'Sony vaio i7';

const placeOrderData = {
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.number.int({ min: 1970, max: 2005 })
};

describe('Add to cart', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to add product to cart', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(productName);
    homePage.clickOnBtn('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.assertProduct(productName);
    homePage.clickOnBtn('Place Order');
    placeOrderForm.typeName(placeOrderData.name);
    placeOrderForm.typeCountry(placeOrderData.country);
    placeOrderForm.typeCity(placeOrderData.city);
    placeOrderForm.typeCard(placeOrderData.card);
    placeOrderForm.typeMonth(placeOrderData.month);
    placeOrderForm.typeYear(placeOrderData.year);
    placeOrderForm.clickOnPurchaseBtn();
    placeOrderForm.checkCardNumber(placeOrderData.card);
    placeOrderForm.checkName(placeOrderData.name);
    placeOrderForm.clickOK();
  });
});
