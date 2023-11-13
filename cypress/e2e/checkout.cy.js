/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductDetailsPageObject
  from '../support/pages/productDetails.pageObject';
import CartPageObject
  from '../support/pages/cart.pageObject';
import PlaceOrderFormPageObject
  from '../support/pages/placeOrderForm.pageObject';

const homePage = new HomeAndCataloguePageObject();
const productDetails = new ProductDetailsPageObject();
const cart = new CartPageObject();
const placeOrderForm = new PlaceOrderFormPageObject();

let user;
const productName = 'Sony vaio i7';
const successMessage = 'Product added';
const modalMessage = 'Thank you for your purchase!';

describe('Checkout', () => {
  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
    homePage.visit();
  });

  it('Should provide the ability to purchase a produst', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(productName);
    productDetails.clickOnAddBtn();
    productDetails.assertAllert(successMessage);
    productDetails.clickOnLink('Cart');
    cart.assertProductInCart(productName);
    cart.clickOnPlaceOrder();
    placeOrderForm.typeName(user.username);
    placeOrderForm.typeCountry(user.country);
    placeOrderForm.typeCity(user.city);
    placeOrderForm.typeCreditCard(user.creditCard);
    placeOrderForm.typeMonth(user.month);
    placeOrderForm.typeYear(user.year);
    placeOrderForm.clickOnPurchase();
    placeOrderForm.assertModalMessage(modalMessage);
    placeOrderForm.assertEnteredData(user.creditCard, user.username);
    placeOrderForm.clickOnOk();
  });
});
