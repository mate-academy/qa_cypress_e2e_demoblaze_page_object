import CartPageObject from '../support/pages/cart.pageObject';
import HomeAndProductPageObject from '../support/pages/homeProduct.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const cartPage = new CartPageObject();
const homePage = new HomeAndProductPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: '3947539574932857',
  month: faker.random.number({ min: 1, max: 12 }),
  year: faker.random.number({ min: 2020, max: 2025 })
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow to add product to cart and place order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    cartPage.addToTheCartBtn();
    cartPage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.assertProductIsIntheCart('Sony vaio i7');
    cartPage.clickPlaceOrder();
    cartPage.typeName(testData.name);
    cartPage.typeCountry(testData.country);
    cartPage.typeCity(testData.city);
    cartPage.typeCreditCard(testData.creditCard);
    cartPage.typeMonth(testData.month);
    cartPage.typeYear(testData.year);
    cartPage.clickOnPurchaseBtn();
    cartPage.assertEnteredDataIsInmodal(testData);
    cartPage.clickAssertOkBtn();
  });
});
