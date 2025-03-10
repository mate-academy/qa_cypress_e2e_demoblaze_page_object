/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject.js';
import ProductPageObjects from '../support/pages/product.pageObject.js';
import CartPageObjects from '../support/pages/cart.pageObject.js';
import { PurchaseSuccessModalObject, PlaceOrderFormObject }
  from '../support/pages/placeOrder.pageObject.js';
import { product } from '../support/Products.js';
const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObjects();
const cartPage = new CartPageObjects();
const placeOrderForm = new PlaceOrderFormObject();
const successWindow = new PurchaseSuccessModalObject();

describe('Checkout', () => {
  before(() => {
    homePage.visit(homePage.url);
  });

  it('should buy a product', () => {
    homePage.clickOnCategory(product.category);
    homePage.clickOnProduct(product.name);
    productPage.addProductToCart();
    productPage.assertAllert(productPage.productAddedAlert);
    productPage.clickCartLink();

    cartPage.assureCartHasProducts();
    cartPage.assureAddedProductByName(product.name);
    cartPage.placeOrder();

    cy.task('generatePurchaseData').then((user) => {
      const {
        name, country, city,
        card, month, year
      } = user;
      placeOrderForm.typeName(name);
      placeOrderForm.typeCountry(country);
      placeOrderForm.typeCity(city);
      placeOrderForm.typeCreditCard(card);
      placeOrderForm.typeMonth(month);
      placeOrderForm.typeYear(year);
      placeOrderForm.purchase();

      successWindow.assertSuccessStatusByName();
      successWindow.assureSum(product.price);
      successWindow.assureCardNumber(card);
      successWindow.assureClientName(name);
      successWindow.assureDate();
      successWindow.closeModal();
    });
  });
});
