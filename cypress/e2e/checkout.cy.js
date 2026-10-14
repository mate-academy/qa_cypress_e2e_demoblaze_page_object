/// <reference types="cypress" />

import HomeAndCataloguePageObject from "../support/pages/homeCatalogue.pageObject";
import CheckoutPageObject from "../support/pages/checkout.pageObject";

const homePage = new HomeAndCataloguePageObject();
const checkoutPage = new CheckoutPageObject();

const testData = {
  name: "Nibretu",
  country: "Ethiopia",
  city: "Bahir Dar",
  card: "1234567890123456",
  month: "10",
  year: "2028",
};

describe("Demoblaze checkout", () => {
  before(() => {
    homePage.visit();
  });

  it("should allow a user to purchase a laptop", () => {
    // Select a laptop.
    homePage.clickOnCategory("Laptops");
    homePage.clickOnProduct("Sony vaio i7");

    // Listen for and verify the Add to cart alert.
    cy.on("window:alert", (message) => {
      expect(message).to.equal("Product added");
    });

    checkoutPage.clickOnAddToCart();

    // Open the cart and verify the product.
    checkoutPage.clickOnCart();
    checkoutPage.assertProductInCart("Sony vaio i7");

    // Open the order form and fill in all fields.
    checkoutPage.clickOnPlaceOrder();
    checkoutPage.fillOrderForm(testData);

    // Purchase and verify the confirmation details.
    checkoutPage.clickOnPurchase();
    checkoutPage.assertPurchaseData(testData);

    // Close the confirmation.
    checkoutPage.clickOnConfirmationButton();
  });
});
