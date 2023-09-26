/// <reference types='cypress' />
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject
  from '../support/pages/product.pageObject';
import CartPageObject
  from '../support/pages/cart.pageObject';

const {
  listOfElements
} = require('../support/functions');
const element = listOfElements();
const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
let order;

describe('Checkout page', () => {
  before(() => {
    cy.task('generateOrderData').then((generateOrderData) => {
      order = generateOrderData;
    });
  });

  it('should allow the user to place an order', () => {
    homePage.visit();
    homePage.assertUrl(element.homeUrl);
    homePage.clickOnCategory(element.laptops);
    homePage.clickOnProduct(element.sonyVaioI7);

    productPage.assertUrl(element.productUrl);
    productPage.clickOnButton(element.addToCart);
    productPage.assertAllert(element.productAddedAlert);
    productPage.clickOnLink(element.cartLink);

    cartPage.assertUrl(element.cartUrl);
    cartPage.assertAddedProduct(element.sonyVaioI7);
    cartPage.clickOnButton(element.placeOrder);

    cartPage.fillInFieldWithData(element.field.name, order.name);
    cartPage.fillInFieldWithData(element.field.country, order.country);
    cartPage.fillInFieldWithData(element.field.city, order.city);
    cartPage.fillInFieldWithData(element.field.creditCard, order.creditCard);
    cartPage.fillInFieldWithData(element.field.month, order.month);
    cartPage.fillInFieldWithData(element.field.year, order.year);
    cartPage.clickOnButton(element.purchase);

    cartPage.assertEnteredData(order.name);
    cartPage.assertEnteredData(order.creditCard);
    cartPage.clickOnButton(element.ok);
  });
});
