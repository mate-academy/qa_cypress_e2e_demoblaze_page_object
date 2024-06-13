/// <reference types='cypress' />

import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import checkoutForm from "../support/pages/checkoutForm.pageObject";

import faker from "faker";

const homePage = new HomeAndCataloguePageObject();
const checkoutPage = new checkoutForm();

let cartNumber = Math.floor(Math.random()*1E16);

const data = {
  product: 'Sony vaio i7',
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCart: cartNumber,
  month: 12,
  year: 1997,
  successMes: 'Product added',
};

describe('Checkout action', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to purchase the product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(data.product);

    checkoutPage.clickOnAddToCartButton();
    checkoutPage.assertAllert(data.successMes);

    homePage.clickOnLink('Cart')
    checkoutPage.assertProductInCart(data.product);

    checkoutPage.clickOnOrderButton();
    checkoutPage.name.type(data.name);
    checkoutPage.country.type(data.country);
    checkoutPage.city.type(data.city);
    checkoutPage.creditCard.type(data.creditCart);
    checkoutPage.month.type(data.month);
    checkoutPage.year.type(data.year);
    checkoutPage.clickOnPurchaseButton();

    checkoutPage.assertSuccessModal(data.creditCart);
    checkoutPage.assertSuccessModal(data.name);

    checkoutPage.clickOnModalOkBtn();
  });
});
