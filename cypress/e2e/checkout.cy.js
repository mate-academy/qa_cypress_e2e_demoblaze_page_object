/// <reference types='cypress' />
import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import checkoutPageObject from "../support/pages/checkout.pageObject";

const homePage = new HomeAndCataloguePageObject();
const checkoutPage = new checkoutPageObject();

describe('DemoBlaze flow', () => {
  let customer;
  before(() => { 
    cy.task('generateCustomer').then((generateCustomer) => {
      customer = generateCustomer;
    });
  });

  it('should allow an ability to buy an item', () => {
    homePage.visit();
    homePage.clickOnCategory(customer.category);
    homePage.clickOnProduct(customer.product);
    homePage.clickOnAddToCartBtn();
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    checkoutPage.assertVerifyProductAdded(customer.product);
    checkoutPage.clickOnPlaceOrderBtn();
    checkoutPage.nameField.type(customer.firstName);
    checkoutPage.countryField.type(customer.country);
    checkoutPage.cityField.type(customer.city);
    checkoutPage.cardField.type(customer.creditCard);
    checkoutPage.monthField.type(customer.month);
    checkoutPage.yearField.type(customer.year);
    checkoutPage.clickOnPurchaseBtn();
    checkoutPage.assertSuccessfulPurchase('Thank you for your purchase!');
    checkoutPage.clickOnModalOkBtn();
  });
});
