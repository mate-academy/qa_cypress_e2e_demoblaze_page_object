import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CheckoutPageObject from '../support/pages/checkoutPage.pageObject';
import { faker } from '@faker-js/faker';

/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const checkoutPage = new CheckoutPageObject();

const testData = {
  category: 'Laptops',
  product: 'Sony vaio i7',
  alertMessage: 'Product added',

  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: '2024'
};

describe('Checkout', () => {
  before(() => {
    // Visit the home page
    homePage.visit();
  });

  it('Should provide possibility to place an order', () => {
    // Click on the "Laptops"
    homePage.clickOnCategory(testData.category);
    // Click on "Sony vaio i7"
    homePage.clickOnProduct(testData.product);
    // Click on [Add to cart]
    homePage.clickOnButton('Add to cart');
    //    assert message in the alert
    homePage.assertAllert(testData.alertMessage);
    // Click on "Cart"
    homePage.clickOnLink('Cart');
    // assert the product is in the cart
    checkoutPage.productIsInTheCart(testData.product);
    // Click on [Place order]
    checkoutPage.clickOnButton('Place Order');
    // Fill all fields
    checkoutPage.typeName(testData.name);
    checkoutPage.typeCountry(testData.country);
    checkoutPage.typeCity(testData.city);
    checkoutPage.typeCard(testData.card);
    checkoutPage.typeMonth(testData.month);
    checkoutPage.typeYear(testData.year);
    // Click on [Purchase]
    checkoutPage.clickOnButton('Purchase');
    // assert entered data is shown on modal
    checkoutPage.modalContainsData('Thank you for your purchase!');
    checkoutPage.modalContainsData(testData.name);
    checkoutPage.modalContainsData(testData.card);
    // Click on [Ok]
    checkoutPage.clickOnButton('OK');
  });
});
