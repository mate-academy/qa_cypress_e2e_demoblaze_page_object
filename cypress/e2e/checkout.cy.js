/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import PlaceOrderPageObject from '../support/pages/placeOrder.pageObject';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const orderPage = new PlaceOrderPageObject();

const testData = {
  name: 'Kok Han',
  country: 'Malaysia',
  city: 'Penang',
  card: '1234567890123456',
  month: '10',
  year: '2027'
};

describe('Demoblaze checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should purchase a laptop successfully', () => {
    // Select a laptop
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    // Register the alert listener, then add the product to the cart
    productPage.assertAlert('Product added');
    productPage.clickOnAddToCartBtn();

    // Open the cart and verify the product
    homePage.clickOnLink('Cart');

    cy.get('#tbodyid tr', { timeout: 10000 })
      .should('have.length.greaterThan', 0);

    cartPage.assertProductInCart('Sony vaio i7');

    // Open the order form and fill in all fields
    cartPage.clickOnPlaceOrderBtn();

    orderPage.typeName(testData.name);
    orderPage.typeCountry(testData.country);
    orderPage.typeCity(testData.city);
    orderPage.typeCard(testData.card);
    orderPage.typeMonth(testData.month);
    orderPage.typeYear(testData.year);

    // Purchase and verify the confirmation
    orderPage.clickOnPurchaseBtn();
    orderPage.assertPurchaseDetails(
      testData.name,
      testData.card
    );

    orderPage.clickOnOkBtn();
  });
});
