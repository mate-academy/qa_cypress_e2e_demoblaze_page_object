/// <reference types='cypress' />
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import CartAndPlaceOrderPageObject
  from '../support/pages/cartAndPlaceOrder.pageObject';
import { generateCheckoutData } from '../support/generateData';

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartAndPlaceOrderPageObject();
const checkoutData = generateCheckoutData();
const product = 'Sony vaio i7';
const alertMessage = 'Product added';
const category = 'Laptops';

describe('Checkout flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should checkout order', () => {
    homePage.clickOnCategory(category);
    homePage.clickOnProduct(product);
    homePage.clickOnAddToCartDtn();
    homePage.assertAllert(alertMessage);
    homePage.clickOnCart();

    cartPage.verifyProductInCart(product);
    cartPage.clickplaceOrderBtn();

    cartPage.typeName(checkoutData.name);
    cartPage.typeCountry(checkoutData.country);
    cartPage.typeCity(checkoutData.city);
    cartPage.typeCard(checkoutData.creditCard);
    cartPage.typeMonth(checkoutData.month);
    cartPage.typeYear(checkoutData.year);

    cartPage.clickPurchaseBtn();

    cartPage.verifyModalSuccessOrder(checkoutData.name,
      checkoutData.creditCard);
    cartPage.typeOkBtn();
  });
});
