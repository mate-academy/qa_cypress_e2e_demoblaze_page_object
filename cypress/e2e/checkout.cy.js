/// <reference types='cypress' />
import CheckoutPageObject from '../support/checkoutPageObject';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import { faker, Faker } from '@faker-js/faker';

const homePage = new HomeAndCataloguePageObject();
const checkOutPage = new CheckoutPageObject();
describe('checkout demoblaze', () => {
  const testData = {
    category: 'Laptops',
    product: 'Sony vaio i7',
    button: 'Add to cart',
    cartLink: 'Cart',
    name: faker.person.firstName(),
    country: faker.location.country(),
    city: faker.location.city(),
    month: faker.date.month(),
    year: 2024,
    creditCard: Math.random().toString().slice(2, 18),
  };
  before(() => {});

  it('Assert checkout product', () => {
    homePage.visit();
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
    homePage.clickOnButton(testData.button);
    homePage.assertAllert('Product added');

    homePage.clickOnLink(testData.cartLink);
    cy.wait(1000);
    checkOutPage.assertProductInCart(testData.product);

    homePage.clickOnButton('Place Order');

    checkOutPage.fillNameField(testData.name);
    checkOutPage.fillCountryField(testData.country);
    checkOutPage.fillCityField(testData.city);
    checkOutPage.fillCardField(testData.creditCard);
    checkOutPage.fillMonthField(testData.month);
    checkOutPage.fillYearField(testData.year);
    homePage.clickOnButton('Purchase');

    checkOutPage.assertPurchase('Thank you for your purchase!');
    checkOutPage.checkOrder(testData.creditCard);
    checkOutPage.checkOrder(testData.name);
    homePage.clickOnButton('OK');
  });
});
