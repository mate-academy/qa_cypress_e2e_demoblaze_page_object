import CartPage from '../support/pages/cartPage.pageObject';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import PlaceOrder from '../support/pages/placeOrderForm.pageObject';
import ProductPage from '../support/pages/productPage.pageObject';
/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const prodPage = new ProductPage();
const cartPage = new CartPage();
const placeOrder = new PlaceOrder();

describe('make order on page', () => {
  before(() => {
    homePage.visit();
  });

  it('should make purchase', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    prodPage.addToCart();
    prodPage.assertAddToCartAlert();

    cartPage.visit();
    cartPage.assertProduct('Sony vaio i7');
    cartPage.placeOrder();

    placeOrder.fillOrderForm();
    placeOrder.clickPurchase();
    placeOrder.assertDataOnModal();
    placeOrder.clickOKonModal();
  });
});
