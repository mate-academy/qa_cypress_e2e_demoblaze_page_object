/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

const order = {
  name: 'Jan Kowalski',
  country: 'Poland',
  city: 'Warsaw',
  card: '4111111111111111',
  month: '10',
  year: '2027'
};

describe('Checkout', () => {
  beforeEach(() => {
    homePage.visit();
  });

  it('should purchase Sony vaio i7 with the entered customer data', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.addToCart('Product added');
    homePage.clickOnLink('Cart');
    cartPage.assertProduct('Sony vaio i7', 790);
    cartPage.placeOrder();
    cartPage.fillOrder(order);
    cartPage.purchase();
    cartPage.assertPurchase(order, 790);
    cartPage.confirmPurchase();
  });
});
