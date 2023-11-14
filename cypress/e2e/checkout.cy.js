import CartPage from '../support/pages/cart.pageObject';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import PageObject from '../support/PageObject';

/// <reference types='cypress' />

const homeAndCatalogue = new HomeAndCataloguePageObject();
const cartPage = new CartPage();
const contactForm = new ContactFormPageObject();
const page = new PageObject();

describe('Order flow', () => {
  before(() => {
    page.visit('https://www.demoblaze.com/');
  });

  it('should provide an ability to add the product to a cart and make a checkout', () => {
homeAndCatalogue.clickOnCategory('Laptops');
    homeAndCatalogue.clickOnProduct('Sony vaio i7');
    homeAndCatalogue.addToCart();
    homeAndCatalogue.clickOnCart();

    cartPage.assertProductInCart('Sony vaio i7');
    cartPage.placeOrder();

    contactForm.fillOrderForm(
      'Kristina Korolkova',
      'Ukraine',
      'Kiliya',
      '1234 5678 9110 3896',
      '12', '2023'
    );
    contactForm.clickPurchaseButton();

    contactForm.assertEnteredData(
      'Thank you for your purchase!',
      'Kristina Korolkova'
    );
  });
});