/// <reference types='cypress' />
import HomeCataloguePageObject from "../support/pages/homeCatalogue.pageObject";
import ProductPagePageObject from "../support/pages/productPage.pageObject";
import CartPagePageObject from "../support/pages/cartPage.pageObject";
import OrderPagePageObject from "../support/pages/orderPage.pageObject";

const homePage = new HomeCataloguePageObject();
const productPage = new ProductPagePageObject();
const cartPage = new CartPagePageObject();
const orderPage = new OrderPagePageObject();

describe('User flow', () => {
  let user;
  const categoryName = 'Laptops';
  const product = 'Sony vaio i7';
  const linkName = 'Cart';

  before(() => {
    cy.visit('');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should allow to buy a laptop', () => {
    homePage.clickOnCategory(categoryName);
    homePage.clickOnProduct(product);
    productPage.clickOnAddToCartButton();
    productPage.assertProductAdded();

    homePage.clickOnLink(linkName);
    cartPage.assertProductInCart(product);
    cartPage.placeOrder();

    orderPage.fillPlaceOrderDetails(user);
    orderPage.purchaseOrder();
    orderPage.verifyOrder(user);
    orderPage.OkButton();
  });
});
