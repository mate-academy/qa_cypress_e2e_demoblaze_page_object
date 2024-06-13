/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';

const homeAndCatalogue = new HomeAndCataloguePageObject();
const contactForm = new ContactFormPageObject();


describe('ergeg', () => {
  before(() => {
    cy.visit('/');

  });

  it('should do something< a hipe i do nof forgott ', () => {
    homeAndCatalogue.clickLaptopBtn();
    homeAndCatalogue.clickLaptopNameBtn();
    homeAndCatalogue.clickAddToCartBtn();
    homeAndCatalogue.click_window_ok_btn();
    homeAndCatalogue.clickcartBtn();
    homeAndCatalogue.assertCartPage();

    contactForm.clickPlaceOrderBtn();
    contactForm.nameField.type(username);
    contactForm.country_field.type(country);
    contactForm.city_field.type(city);
    contactForm.card_field.type(card);
    contactForm.month_field.type(month);
    contactForm.year_field.type(year);
    contactForm.click_purchase_btn();
    contactForm.assert_succesful_message();
    contactForm.click_okBtn();
  });
});
