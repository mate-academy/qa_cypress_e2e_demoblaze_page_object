/* eslint-disable max-len */
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/productPage.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import PlaceOrderFormPageObject from '../support/pages/placeOrderForm.pageObject';
import { CATEGORY_LAPTOPS, PRODUCT_SONY_VAIO, CART_PAGE } from '../support/constants';

/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const placeOrderForm = new PlaceOrderFormPageObject();

describe('Purchase flow', () => {
  let formData;
  let alertMessage;

  before(() => {
    cy.task('placeOrderFormData').then((orderFormData) => {
      formData = orderFormData;
    });

    cy.fixture('alerts').then((alerts) => {
      alertMessage = alerts;
    });
  });

  it('should allow to make a product purchase', () => {
    homePage.visit();
    homePage.clickOnCategory(CATEGORY_LAPTOPS);
    homePage.clickOnProduct(PRODUCT_SONY_VAIO);
    productPage.clickOnAddToCartBtn();
    productPage.assertAllert(alertMessage.productAddedToCart);
    cartPage.clickOnLink(CART_PAGE);
    cartPage.assertProductInCart(PRODUCT_SONY_VAIO);
    cartPage.clickOnPlaceOrderBtn();
    placeOrderForm.fillPlaceOrderForm(formData);
    placeOrderForm.clickOnPurchaseBtn();
    cartPage.assertEnteredDataInModal(formData);
    cartPage.clickOkeyBtn();
  });
});
