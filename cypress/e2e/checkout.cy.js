import HomePagePageObject from "../support/pages/homePage.PageObject";
import HeaderContainerPageObject from "../support/pages/headerContainer.PageObject";
import CartPagePageObject from "../support/pages/cartPage.pageObject";
/// <reference types='cypress' />

const homePage = new HomePagePageObject;
const headerContainer = new HeaderContainerPageObject;
const cartPage = new CartPagePageObject;

describe('Demoblaze (POM Object)', () => {
  let userInfo;

  beforeEach(() => {
    homePage.visit();

    cy.task('generatePlaceOrderInfo')
    .then((generatePlaceOrderInfo) => {
      userInfo = generatePlaceOrderInfo;
    });
  });

  it('should place an order', () => {
    homePage.clickOnLaptopCategory();
    homePage.clickOnSonyVeioI7Laptop();
    homePage.checkForContainName();
    homePage.clickOnAddToCartBtn();
    homePage.assertAllert('Product added');
    headerContainer.clickOnCartBtn();
    cartPage.checkThatProductIsAdded();
    cartPage.clickOnPlaceOrderBtn();
    cartPage.checkPlaceOrderHeader();
    cartPage.checkPurchaseBtn();
    cartPage.checkTotalInText();
    cartPage.checkAllFieldsOnPlaceOrder();
    cartPage.fillPlaceOrderInfo(userInfo.name, userInfo.country, 
      userInfo.city, userInfo.creditCard, userInfo.month, userInfo.year);
    cartPage.clickOnPurchaseBtn();
    cartPage.checkAccertData();
    cartPage.clickOnOkBtn();
  });
});
