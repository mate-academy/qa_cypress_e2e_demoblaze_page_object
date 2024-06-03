/// <reference types='cypress' />

import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import CartPage from "../support/pages/cart.pageObject";
import ProductPage from "../support/pages/productPage.pageObject";
import PageObject from "../support/PageObject";

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPage();
const cartPage = new CartPage();
const page = new PageObject();

describe("", () => {
  let user;
  const category = "Laptops";
  const product = "Sony vaio i7";

  before(() => {
    cy.task("generateUser").then((generateUser) => {
      user = generateUser;
    });
    console.log(user);
  });

  it("should provide the ability to buy the laptop", () => {
    homePage.visit();
    homePage.clickOnCategory(category);
    homePage.clickOnProduct(product);

    productPage.checkIsProductPageOpened();
    productPage.clickOnButton("Add to cart");
    productPage.assertAllert("Product added");

    page.clickOnLink("Cart");
    cartPage.checkIsCartPageOpened();
    cartPage.checkIsProductExistInCart(product);
    cartPage.clickOnButton("Place Order");
    cartPage.fillAllFields(user);
    cartPage.clickPurchaseButton();
    cartPage.verifyOrder(user);
  });
});
