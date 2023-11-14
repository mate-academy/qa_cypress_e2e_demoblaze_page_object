/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CheckoutPageObject
  from '../support/pages/checkout.pageObject';
import CartPageObject
  from '../support/pages/cart.pageObject';
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const checkoutPage = new CheckoutPageObject();
const cartPage = new CartPageObject();
const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.random.number({ min: 2018, max: 2028 }),
};

describe('Demoblaze checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to add product to cart and place order', () => {
    homePage.clickOnNotebookCategory();
    homePage.clickOnSonyVaioI7();
    homePage.clickAddToCartButton();
    homePage.assertAddingProductToCartAlert();
    homePage.clickOnCartLink();
    cartPage.clickPlaceOrderButton();

    checkoutPage.fillOrderForm(
      testData.name,
      testData.country,
      testData.city,
      testData.creditCard,
      testData.month,
      testData.year
    );
    checkoutPage.clickPurchaseButton();
    checkoutPage.assertOrderInfo(
      testData.creditCard,
      testData.month,
      testData.year
    );
  });
});
