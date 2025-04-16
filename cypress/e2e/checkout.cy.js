/// <reference types="cypress" />

import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import CheckoutPageObject from '../support/pages/checkOut.pageObject';

describe('Purchase Flow', () => {
  const homePage = new HomeAndCataloguePageObject();
  const checkoutPage = new CheckoutPageObject();

  it('should complete the purchase flow successfully', () => {
    const testData = {
      productName: 'Sony vaio i7',
      category: 'Laptops',
      price: '790',
      customer: {
        name: 'John Doe',
        country: 'USA',
        city: 'Albany',
        card: '1234 4332 3455 6547',
        month: '10',
        year: '2027'
      }
    };

    homePage.visit();

    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.productName);
    homePage.addToCart();

    homePage.goToCart();
    checkoutPage.verifyProductInCart(testData.productName, testData.price);

    checkoutPage.clickPlaceOrder();
    checkoutPage.verifyPlaceOrderForm();
    checkoutPage.fillOrderForm(testData.customer);
    checkoutPage.clickPurchase();

    checkoutPage.verifyPurchaseDetails({
      price: testData.price,
      name: testData.customer.name,
      card: testData.customer.card
    });

    checkoutPage.confirmOrder();
  });
});
