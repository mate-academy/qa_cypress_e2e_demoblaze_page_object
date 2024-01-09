import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import PageOrderForm from '../support/pages/placeOrderForm.pageObject';
import CartPage from '../support/pages/cartPage.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPage();
const placeOrder = new PageOrderForm();

describe('Checkout', () => {
  const testData = {
    name: faker.name.firstName(),
    country: faker.lorem.word(),
    city: faker.lorem.word(),
    card: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: faker.random.number({ min: 1900, max: 2024 })
  };
  before(() => {

  });

  it('should add product to Cart', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnAddToCart();
    homePage.assertAllert('Product added');
    homePage.confirmAllert('Ok');
    homePage.clickOnLink('Cart');
    cartPage.nameOfProduct('Sony vaio i7');
    cartPage.clickOnPlaceOrder();
  });

  it.only('should be able to fill all fields in the place order form', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnAddToCart();
    homePage.assertAllert('Product added');
    homePage.confirmAllert('Ok');
    homePage.clickOnLink('Cart');
    cartPage.nameOfProduct('Sony vaio i7');
    cartPage.clickOnPlaceOrder();

    placeOrder.typeName(testData.name);
    placeOrder.typeCountry(testData.country);
    placeOrder.typeCity(testData.city);
    placeOrder.typeCreditCard(testData.card);
    placeOrder.typeMonth(testData.month);
    placeOrder.typeYear(testData.year);
    placeOrder.clickOnPurchase();
    placeOrder.checkModalData();
    placeOrder.clickOnOK();
  });
});
