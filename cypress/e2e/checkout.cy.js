import ContactFormPageObject from "../support/pages/contactForm.pageObject";
import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import CheckoutPageObject from "../support/pages/checkout.pageObject";
import ProductPageObject from "../support/pages/product.PageObject";
import { faker } from "@faker-js/faker";
import FormPageObject from "../support/pages/form.pageObject";
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const checkout = new CheckoutPageObject();
const computer = new ProductPageObject();
const form = new FormPageObject();

describe("Buying laptop on demoblaze app", () => {
  before(() => {
    homePage.visit();
  });

  it("Should order a laptop from Demoblaze webapp", () => {
    homePage.clickOnCategory("Laptops");
    homePage.clickOnProduct("Sony vaio i7");
    computer.clickOnAddToCart();
    computer.clickOnCart();
    cy.contains("Sony vaio i7").should("be.visible");
    checkout.clickOnButton();
    form.fillFields();
    form.verifyFields();
    form.completeOrder();
    form.confirmOrderCompleted();
  });
});
