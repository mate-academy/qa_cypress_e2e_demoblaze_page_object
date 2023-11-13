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

    contactForm.typeName('Ivan');
    contactForm.typeCountry('Ukraine');
    contactForm.typeCity('Lviv');
    contactForm.typeCreditCart(4441123445678910);
    contactForm.typeMonth('May');
    contactForm.typeYear(2023);
    contactForm.clickOnTheButton('Purchase');
    contactForm.assertData('Ivan', 4441123445678910);
    contactForm.clickOnTheButton('OK');
  });
});
