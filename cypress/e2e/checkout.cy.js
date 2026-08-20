import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import ProductDetailsPageObject
  from '../support/pages/productDetails.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import OrderFormPageObject from '../support/pages/orderForm.pageObject';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductDetailsPageObject();
const cartPage = new CartPageObject();
const orderForm = new OrderFormPageObject();

const testData = {
  product: 'Sony vaio i7',
  addToCartMessage: 'Product added',
  name: 'John Doe',
  country: 'Ecuador',
  city: 'Quito',
  card: '4111111111111111',
  month: 'August',
  year: '2026'
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow a user to purchase a laptop', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(testData.product);

    productPage.clickOnAddToCartBtn();
    productPage.assertAlert(testData.addToCartMessage);

    homePage.clickOnLink('Cart');
    cartPage.assertProductInCart(testData.product);
    cartPage.clickOnPlaceOrderBtn();

    orderForm.fillOrderForm(testData);
    orderForm.clickOnPurchaseBtn();
    orderForm.assertEnteredData(testData);
    orderForm.clickOnConfirmationBtn();
  });
});
