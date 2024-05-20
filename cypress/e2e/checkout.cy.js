/// <reference types='cypress' />
import { feker } from "@faker-js/faker";
import HomePageObject from "../support/pages/home-page.page-object";
import CartPageObject from "../support/pages/cart-page.page-object";
import PurchasePageObject from "../support/pages/purchase-page.page-object";

const homePage = new HomePageObject;
const cartPage = new CartPageObject;
const purchasePage = new PurchasePageObject;

const category = 'Laptops';
const productName = 'Sony vaio i7';
const addToCardBtn = 'Add to cart';
const placeOrderBtn = 'Place Order';
const purchaseBtn = 'Purchase';
const messagePurchase = 'Thank you for your purchase!';

describe('', () => {
  let user;

  before(() => {
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
  });

  it('The user should be able to buy the product in the app', () => {
    cy.visit('/');
    homePage.getCategoryName(category).click();
    homePage.getProductName(productName).click();
    homePage.getAddToCardBtn(addToCardBtn).click();

    homePage.CartBtn.click();

    cartPage.cartTable.should('contain', productName);
    cartPage.getPlaceOrderBtn(placeOrderBtn).click();

    purchasePage.nameInput.type(user.name);
    purchasePage.countryInput.type(user.country);
    purchasePage.cityInput.type(user.city);
    purchasePage.cardInput.type(user.card);
    purchasePage.dataMonthInput.type(user.date.month);
    purchasePage.dataYearInput.type(user.date.year);

    purchasePage.getpurchaseBtn(purchaseBtn).click();

    purchasePage.messageAboutSuccessfulPurchase
      .should('contain', messagePurchase);

    purchasePage.okBtn.click();
  });
});
