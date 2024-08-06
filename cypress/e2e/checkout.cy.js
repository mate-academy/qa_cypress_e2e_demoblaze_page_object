/// <reference types='cypress' />
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductInfoPageObject from '../support/pages/productInfo.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import PlaceOrderPageObject from '../support/pages/placeOrder.pageObject';

const { generateFakeUser } = require('../support/fakeUser');

const fakeUser = generateFakeUser();

const homeСatalogue = new HomeAndCataloguePageObject();
const productInfo = new ProductInfoPageObject();
const cart = new CartPageObject();
const placeOrder = new PlaceOrderPageObject();

describe('', () => {
  before(() => {
    homeСatalogue.visit();
  });

  it('should add product to the Cart', () => {
    homeСatalogue.clickOnCategory('Laptops');
    homeСatalogue.clickOnProduct('Sony vaio i7');

    productInfo.clickOnButton('Add to cart');

    productInfo.checkAlertContains('Product added');

    productInfo.clickOnCartIcon();

    cart.assertProductInCart('Sony vaio i7');
    cart.clickPlaceOrderButton();

    placeOrder.typeName(fakeUser.name);
    placeOrder.typeCity(fakeUser.city);
    placeOrder.typeCountry(fakeUser.country);
    placeOrder.typeCreditCard(fakeUser.card);
    placeOrder.typeMonth(fakeUser.month);
    placeOrder.typeYear(fakeUser.year);

    placeOrder.clickPurchase();

    placeOrder.assertPurchaseDetails(fakeUser.name, fakeUser.card);

    placeOrder.clickOk();
  });
});
