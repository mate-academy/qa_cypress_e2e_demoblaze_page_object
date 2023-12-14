import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
import LaptopsPageObject from '../support/pages/laptopsPage.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import PlaceOrderPageObject from '../support/pages/placeOrder.pageObject';
import FinalPageObject from '../support/pages/finalPage.pageObject';
/// <reference types='cypress' />

const contactForm = new ContactFormPageObject();
const homePage = new HomeAndCataloguePageObject();
const laptopsPage = new LaptopsPageObject();
const cartPage = new CartPageObject();
const placeOrderPage = new PlaceOrderPageObject();
const finalPage = new FinalPageObject();

const testData = {
  email: faker.internet.email(),
  name: faker.name.firstName(),
  message: faker.random.words(),
  successMessage: 'Thanks for the message!!'
};

describe('Contact', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to send feedback', () => {
    homePage.clickOnLink('Contact');
    contactForm.typeEmail(testData.email);
    contactForm.typeName(testData.name);
    contactForm.typeMessage(testData.message);
    contactForm.clickOnSendMessageBtn();

    contactForm.assertAllert(testData.successMessage);
  });

  it('should complete the automation flow', () => {
    homePage.visitHomePage();
    homePage.clickLaptops();
    laptopsPage.clickSonyVaioI7();
    cartPage.clickAddToCart();
    cartPage.assertProductInCart('Sony vaio i7');
    cartPage.clickCart();
    placeOrderPage.clickPlaceOrder();
    placeOrderPage.fillOrderForm(
      'John Doe',
      'United States',
      'New York',
      '1234567890123456',
      '12',
      '2024'
    );
    placeOrderPage.clickPurchase();
    placeOrderPage.assertEnteredData(
      'John Doe',
      '1234567890123456'
    );
    finalPage.clickOk();
  });
});
