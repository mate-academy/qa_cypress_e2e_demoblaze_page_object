/// <reference types='cypress' />
import CheckoutPageObject from '../support/pages/checkout.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import faker from 'faker';

const checkoutPage = new CheckoutPageObject();
const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.random.number({ min: 2024, max: 2029 })
};

describe('Should provide the ability for checout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability add product to the cart', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.clickAddToCart();
    productPage.alertMessage('Product added');
    homePage.clickOnLink('Cart');

    checkoutPage.containProduct('Sony vaio i7');
    checkoutPage.clickOnPlaceOrderBtn();

    checkoutPage.fillName(testData.name);
    checkoutPage.fillCountry(testData.country);
    checkoutPage.fillCity(testData.city);
    checkoutPage.fillCard(testData.card);
    checkoutPage.fillMonth(testData.month);
    checkoutPage.fillYear(testData.year);
    checkoutPage.clickOnPurchaseBtn();

    checkoutPage.assertSuccessPurchase(testData.card, testData.name,
      'Thank you for your purchase!');
    checkoutPage.clickOkBtn();
  });
});
