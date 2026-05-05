/// <reference types='cypress' />

import HomeCataloguePage from "../support/pages/homeCatalogue.pageObject";
import ProductPage from "../support/pages/product.pageObject";
import CartPage from "../support/pages/cart.pageObject";
import OrderModal from "../support/pages/orderModal.pageObject";

describe("Demoblaze checkout flow", () => {
  const homeCataloguePage = new HomeCataloguePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const orderModal = new OrderModal();

  const productName = "Sony vaio i7";

  const orderData = {
    name: "John Doe",
    country: "Italy",
    city: "Rome",
    card: "4111111111111111",
    month: "12",
    year: "2026",
  };

  it("should complete checkout flow successfully", () => {
    homeCataloguePage.visit();

    homeCataloguePage.clickOnLaptopsCategory();
    homeCataloguePage.clickOnProduct(productName);

    productPage.clickOnAddToCart();

    cy.on("window:alert", (text) => {
      expect(text).to.eq("Product added.");
    });

    cartPage.clickOnCart();
    cartPage.assertProductInCart(productName);
    cartPage.clickOnPlaceOrder();

    orderModal.fillOrderForm(orderData);
    orderModal.clickOnPurchase();
    orderModal.assertOrderDetails(orderData);
    orderModal.clickOnOk();
  });
});
