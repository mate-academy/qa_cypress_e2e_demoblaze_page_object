/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductPage from '../support/pages/productPage.pageObject';

const homeCatalog = new HomeAndCataloguePageObject();
const productPage = new ProductPage();

describe('Checkout page', () => {
  let user;
  const productName = 'Sony vaio i7';

  before(() => {
    homeCatalog.visit();
    cy.task('generatePurchaseData').then((generatePurchaseData) => {
      user = generatePurchaseData;
    });
  });

  it('should provide the ability to purchase the product', () => {
    homeCatalog.clickOnCategory('Laptops');
    homeCatalog.clickOnProduct(productName);
    productPage.clickOnAddToCartButton();
    productPage.assertAllert('Product added');
    productPage.clickOnCartLink();
    productPage.assertProductInTheCart(productName);
    productPage.clickOnPlaceOrderButton();
    productPage.typeName(user.name);
    productPage.typeCountry(user.country);
    productPage.typeCity(user.city);
    productPage.typeCreditCard(user.creditCard);
    productPage.typeMonth(user.month);
    productPage.typeYear(user.year);
    productPage.clickOnPurchaseButton();
    productPage.assertPurchaseModalIsVisible();
    productPage.assertModalPurchaseCard(user.creditCard);
    productPage.assertModalPurchaseName(user.name);
    productPage.clickOnOKButton();
  });
});
