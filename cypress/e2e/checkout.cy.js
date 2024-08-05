/// <reference types='cypress' />

import HomeAndCataloguePageObject from
  '../support/pages/homeСatalogue.pageObject';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';

const homeAndCatalogue = new HomeAndCataloguePageObject();
const contactForm = new ContactFormPageObject();

describe('flow', () => {
  before(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('should complete the purchase flow', () => {
    homeAndCatalogue.clickOnCategory('Laptops');
    homeAndCatalogue.clickOnProduct('Sony vaio i7');
    homeAndCatalogue.addToCart();
    homeAndCatalogue.clickOnCart();
    homeAndCatalogue.verifyProductInCart('Sony vaio i7');
    homeAndCatalogue.placeOrder();

    contactForm.fillOrderForm(
      'Ilya',
      'Ukraine',
      'Odessa',
      '5555 5555 5555 5555',
      '09', '2003'
    );
    contactForm.clickPurchaseButton();
    contactForm.assertAllert('Thank you for your purchase!', 'Ilya');
    contactForm.clickOkButton();
  });
});
