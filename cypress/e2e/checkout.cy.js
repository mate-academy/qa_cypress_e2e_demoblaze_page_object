/// <reference types='cypress' />
import HeaderPageObject from '../support/pages/header.pageObject';
import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import ProductDetailsPageObject from '../support/pages/productDetails.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';

const header = new HeaderPageObject();
const homePage = new HomeAndCataloguePageObject();
const productDetailsPage = new ProductDetailsPageObject();
const cart = new CartPageObject();

describe('Checkout', () => {
  const testData = {
    category: 'Laptops',
    productName: 'Sony vaio i7',
    productPrice: '790',
    totalPrice: '790',
    alertMessage: 'Product added',
    orderDetails: {
      name: 'John Doe',
      country: 'USA',
      city: 'New York',
      card: '1234567890123456',
      month: 'July',
      year: '2025'
    }
  };

  before(() => {
    homePage.visit();
  });

  it('should enable user to make a purchase', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.productName);

    productDetailsPage.verifyProductDetails(testData.productName);
    productDetailsPage.clickOnAddToCartButton();
    productDetailsPage.assertAlert(testData.alertMessage);

    header.clickOnLink('Cart');

    cart.verifyCartItem(testData.productName);
    cart.verifyProductPrice(testData.productPrice);
    cart.verifyCartTotal(testData.totalPrice);
    cart.clickOnPlaceOrderButton();
    cart.fillOrderDetails(
      testData.orderDetails.name,
      testData.orderDetails.country,
      testData.orderDetails.city,
      testData.orderDetails.card,
      testData.orderDetails.month,
      testData.orderDetails.year
    );
    cart.clickOnPurchaseButton();
    cart.assertAlert('Thank you for your purchase!');
  });
});
