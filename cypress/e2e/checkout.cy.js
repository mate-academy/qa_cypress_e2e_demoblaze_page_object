/// <reference types='cypress' />
import HomeAndCataloguePageObject from
  '../support/pages/homePageCatalog.pageObject';
import PageOrderForm from '../support/pages/placeOrderForm.pageObject';
import CartPage from '../support/pages/cartPage.pageObject';
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPage();
const orderForm = new PageOrderForm();

describe('Contact', () => {
  const testData = {
    name: faker.name.firstName(),
    country: faker.lorem.word(),
    city: faker.lorem.word(),
    card: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: faker.random.number({ min: 2000, max: 2024 })
  };

  before(() => {
    homePage.visit();
  });

  it('should provide an ability to add product to the cart and buy it', () => {
    homePage.visit();
    homePage.clickOnCategoryButton('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnAddToCart();
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.assertProductInTheCart('Sony vaio i7');
    cartPage.clickOnPlaceOrderButton();

    orderForm.typeName(testData.name);
    orderForm.typeCountry(testData.country);
    orderForm.typeCity(testData.city);
    orderForm.typeCreditCard(testData.card);
    orderForm.typeMonth(testData.month);
    orderForm.typeYear(testData.year);
    orderForm.clickOnPurchaseButton();

    orderForm.assertSuccessfulPurcheseMessage('Thank you for your purchase!');
    orderForm.assertSuccessfulPurcheseMessage(testData.name);
    orderForm.assertSuccessfulPurcheseMessage(testData.card);
    orderForm.clickOnOkAfterPurchase();
  });
});
