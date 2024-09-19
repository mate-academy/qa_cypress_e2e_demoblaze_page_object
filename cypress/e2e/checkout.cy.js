import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import CheckoutPageObject from "../support/pages/checkout.pageObject";
import ProductPageObject from "../support/pages/productPage.pageObject";
import OrderFormPageObject from "../support/pages/orderForm.pageObject";

/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const checkout = new CheckoutPageObject();
const product = new ProductPageObject();
const form = new OrderFormPageObject();

describe("Buying laptop on demoblaze app", () => {
  before(() => {
    homePage.visit();
  });

  it("Should order a laptop from Demoblaze webapp", () => {
    homePage.clickOnCategory("Laptops");
    homePage.clickOnProduct("Sony vaio i7");
    product.clickOnAddToCart();
    cy.wait(2000); 
    product.clickOnCart({ timeout: 3000 });
    cy.wait(2000); 
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Product added');
    });
    cy.contains("Sony vaio i7").should("be.visible", { timeout: 3000 });
    checkout.clickOnButton();
    form.fillFields();
    form.verifyFields();
    form.completeOrder();
    form.confirmOrderCompleted();
  });
});
