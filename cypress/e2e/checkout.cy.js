import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CheckoutPageObject from '../support/pages/checkoutPageObject';
import { faker, Faker } from '@faker-js/faker';
/// <reference types='cypress' />

const checkoutPage = new CheckoutPageObject();
const homePage = new HomeAndCataloguePageObject();

describe('Checkout', () => {
  before(() => {
    const testData = {
      category: 'Laptops',
      product: 'Sony vaio i7',
      button: 'Add to cart',
      allert: 'Product added',
      link: 'Cart',
      orderButton: 'Place Order',
      name: faker.person.fillName(),
      country: faker.location.country(),
      city: faker.location.city(),
      card: faker.finance.creditCardNumber(),
      month: faker.date.month(),
      year: faker.date.future().getFullYear(),
      btn: 'Purchase',
      confirmBtn: 'OK',
    };
  });

  it('should provide the ability to send feedback', () => {
    homePage.visit();
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
    homePage.clickOnAddToCard(testData.button);
    homePage.assertAllert(testData.allert);
    homePage.clickOnLink(testData.link);
    checkoutPage.assertProductAdded(testData.product);
    checkoutPage.clickOrderModal(testData.orderButton);
    });

  it('should provide the filling the form', () => {
    checkoutPage.fillNameField(testData.name);
    checkoutPage.fillCountryField(testData.country);
    checkoutPage.fillCityField(testData.city);
    checkoutPage.fillCreditCardField(testData.card);
    checkoutPage.fillMonthField(testData.month);
    checkoutPage.fillYearField(testData.year);
    checkoutPage.clickPurchaseBtn(testData.btn);
    checkoutPage.checkOrder(testData.card);
    checkoutPage.checkOrder(testData.name);
    checkoutPage.clickOnConfirmBtn(testData.confirmBtn);
  })
});