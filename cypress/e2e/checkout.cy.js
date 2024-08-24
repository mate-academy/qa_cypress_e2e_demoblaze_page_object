import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/productPage.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import PlaceOrderFormPageObject from '../support/pages/placeOrderForm.pageObject';

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

    // Fix the typo here
    cy.fixture('alerts').then((alerts) => {
      alertMessage = alerts;
    });
  });

  it('should allow to make a product purchase', () => {
    homePage.visit();

    homePage.clickOnCategory('Laptops');

    homePage.clickOnProduct('Sony vaio i7');

    productPage.clickOnAddToCartBtn();

    productPage.assertAllert(alertMessage.productAddedToCart);

    cartPage.clickOnLink('Cart');

    cartPage.assertProductInCart('Sony vaio i7');

    cartPage.clickOnPlaceOrderBtn();

    placeOrderForm.fillPlaceOrderForm(formData);

    placeOrderForm.clickOnPurchaseBtn();

    cartPage.assertEnteredDataInModal(formData);

    cartPage.clickOkeyBtn();
  });
});
