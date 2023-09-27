import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CartPageObject
  from '../support/pages/cart.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear(),
  successMessage: 'Thank you for your purchase!'
};

describe('Purchasing the product', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an option to add a product to the cart & checkout', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.assertProductInCart('Sony vaio i7');
    cartPage.clickOnButton('Place Order');

    cartPage.typeName(testData.name);
    cartPage.typeCountry(testData.country);
    cartPage.typeCity(testData.city);
    cartPage.typeCreditCard(testData.creditCard);
    cartPage.typeMonth(testData.month);
    cartPage.typeYear(testData.year);
    cartPage.clickOnButton('Purchase');

    cartPage.assertSuccessMessage(testData.successMessage);
    cartPage.assertName(testData.name);
    cartPage.assertCreditCard(testData.creditCard);
    cartPage.clickOnButton('OK');
  });
});
