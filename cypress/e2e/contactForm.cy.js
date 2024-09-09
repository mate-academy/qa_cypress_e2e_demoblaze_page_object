/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types='cypress' />
import CartPageObject from '../support/pages/cartPage.pageObject';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/productPage.pageObject';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const contactForm = new ContactFormPageObject();

describe('Contact', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to send feedback', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    cy.url().should('include', '/prod.html?idp_=');

    productPage.setUrl(cy.url());
    productPage.clickOnAddToCart();

    productPage.assertAllert('Product added');

    cy.wait(1000);

    productPage.clickOnCart();

    cartPage.checkAnObject('Sony vaio i7', '790');

    cartPage.placeOrder();

    contactForm.fillForm();

    contactForm.clickOnPurchase();

    cy.wait(1000);

    contactForm.assertForm();

    cy.wait(1000);

    contactForm.clickOk();
  });
});
