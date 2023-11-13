/// <reference types='cypress' />

import ContactFormPageObject
  from '../support/pages/contactForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import checkoutPageObject
  from '../support/pages/checkout.pageObject';


import faker from 'faker';

const contactForm = new ContactFormPageObject();
const homePage = new HomeAndCataloguePageObject();
const checkout = new checkoutPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.random.number({ min: 2018, max: 2028 }),
};

describe('Demoblaze checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to add product to cart and place order', () => {
    checkout.clickOnCategory('notebook');
    homePage.clickOnProduct('Sony vaio i7');
    checkout.clickButton('addToCart(9)');
    checkout.assertAddingProductToCart('Product added.');
    homePage.clickOnLink('Cart');
    checkout.clickPlaceOrderButton();

    checkout.fillOrderForm(
      testData.name,
      testData.country,
      testData.city,
      testData.creditCard,
      testData.month,
      testData.year
    );
    checkout.clickPurchaseButton();
  });
});
