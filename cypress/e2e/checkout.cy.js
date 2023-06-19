// <reference types="cypress" />;
import CheckoutFormPageObject from '../support/pages/checkoutForm.pageObject';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const checkoutPage = new CheckoutFormPageObject();

const productData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.random.number({ max: 4001234567891234 }),
  month: faker.random.number({ min: 1, max: 12 }),
  year: faker.random.number({ min: 2023, max: 2026 })
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to buy product', () => {
    homePage.clickOnCategory('Laptop');
    homePage.clickOnProduct('Sony vaio i7');
    checkoutPage.clickOnAddToCart();
    checkoutPage.assertAllert('Product added');

    homePage.clickOnLink('Cart');
    checkoutPage.assertProductInCart('Sony vaio i7');

    checkoutPage.clickOnPlaceOrder('Place Order');
    checkoutPage.fieldName.type(productData.name);
    checkoutPage.fieldCountry.type(productData.country);
    checkoutPage.fieldCity.type(productData.city);
    checkoutPage.fieldCreditCard.type(productData.creditCard);
    checkoutPage.fieldMonth.type(productData.month);
    checkoutPage.fieldYear.type(productData.year);
    checkoutPage.clickOnPurchaseBtn('Purchase');
    checkoutPage.assertEnteredDataShown('Thank you for your purchase!');
    checkoutPage.clickOnOkBtn('Ok');
  });
});
