/// <reference types='cypress' />

import HomeAndCataloguePageObject from
  '../support/pages/homeСatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';

const homeAndСatalogue = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();
const contactForm = new ContactFormPageObject();

describe('Demoblaze app', () => {
  before(() => {
    homeAndСatalogue.visit();
  });

  it('checking the ability to add and order goods', () => {
    homeAndСatalogue.clickOnCategory('Laptop');
    homeAndСatalogue.clickOnProduct('Sony vaio i7');
    homeAndСatalogue.clickOnTheButton('Add to cart');
    homeAndСatalogue.succsessfulAllert();
    homeAndСatalogue.clickOnLink('Cart');

    cartPage.assertAboutProduct('Sony vaio i7');
    cartPage.clickOnTheButton('Place Order');
    contactForm.typeName(contactForm.testData.name);
    cy.wait(2000);
    contactForm.typeCountry(contactForm.testData.country);
    contactForm.typeCity(contactForm.testData.city);
    contactForm.typeCreditCard(contactForm.testData.card);
    contactForm.typeMonth(contactForm.testData.month);
    contactForm.typeYear(contactForm.testData.year);
    contactForm.clickOnTheButton('Purchase');
    contactForm.assertData(
      contactForm.testData.name,
      contactForm.testData.card,
      contactForm.testData.country,
      contactForm.testData.city,
      contactForm.testData.month,
      contactForm.testData.year
    );
    contactForm.clickOnTheButton('OK');
  });
});
