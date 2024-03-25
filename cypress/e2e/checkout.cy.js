/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import { PlaceOrderPage }
  from '../support/pages/placeOrderPage';

const homeCatalogue = new HomeAndCataloguePageObject();
const orderPage = new PlaceOrderPage();
const productName = 'Sony vaio i7';
const categoryName = 'Laptops';
const productAddedToCartMessage = 'Product added';
const linkName = 'Cart';
let orderInfo = {};

describe('Item purchace flow', () => {
  beforeEach(() => {
    homeCatalogue.visit();
    cy.task('generatePlaceOrderInfo').then((generatePlaceOrderInfo) => {
      orderInfo = generatePlaceOrderInfo;
    });
  });

  it('should recreate a product purchace flow', () => {
    homeCatalogue.clickOnCategory(categoryName);
    homeCatalogue.clickOnProduct(productName);
    homeCatalogue.addToChartButton.click();
    homeCatalogue.assertAlertMessage(productAddedToCartMessage);
    homeCatalogue.clickOnLink(linkName);
    homeCatalogue.assertProductInCart(productName);
    homeCatalogue.placeOrderButton.click();

    orderPage.fillOrderPage(orderInfo);
    orderPage.purchaseButton.click();
    orderPage.accertSuccessfulPurchase();
  });
});
