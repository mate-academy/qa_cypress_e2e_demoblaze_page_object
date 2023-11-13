/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';

const homeAndCatalogue = new HomeAndCataloguePageObject();
const contactForm = new ContactFormPageObject();

describe('Demoblaze checkout tests', () => {
  before(() => {
    cy.visit('/');
  });

  it('Should be ability to add the product to the cart and checkout', () => {
    homeAndCatalogue.clickLaptopsBtn();
    homeAndCatalogue.clickLaptopNameBtn();
    homeAndCatalogue.clickAddToCartBtn();
    homeAndCatalogue.clickWindowOkBtn();
    homeAndCatalogue.clickCartBtn();
    homeAndCatalogue.assertCartPageUrl();

    contactForm.clickPlaceOrderBtn();
    contactForm.nameField.type(username);
    contactForm.countryField.type(country);
    contactForm.cityField.type(city);
    contactForm.cardField.type(card);
    contactForm.monthField.type(month);
    contactForm.yearField.type(year);
    contactForm.clickPurchaseBtn();
    contactForm.assertSuccessfulMessageModal();
    contactForm.clickOKBtn();
  });
});
