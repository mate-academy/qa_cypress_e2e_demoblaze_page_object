import HomePageObject from '../support/pages/homeСatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import OrderPageObject from '../support/pages/order.pageObject';
import faker from 'faker';

const homePage = new HomePageObject();
const cartPage = new CartPageObject();
const orderPage = new OrderPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: '4539622039401321',
  month: faker.random.number({ min: 1, max: 12 }).toString().padStart(2, '0'),
  year: faker.random.number({ min: 2023, max: 2030 }).toString(),
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    cartPage.clickAddToCart();
  });

  it('should allow to place an order', () => {
    cartPage.clickOnCart();
    cartPage.assertProductInCart('Sony vaio i7');

    cartPage.clickPlaceOrder();
    orderPage.fillName(testData.name);
    orderPage.fillCountry(testData.country);
    orderPage.fillCity(testData.city);
    orderPage.fillCard(testData.card);
    orderPage.fillMonth(testData.month);
    orderPage.fillYear(testData.year);

    orderPage.clickPurchase();
    orderPage.assertSuccessModal(testData.card);
    orderPage.assertSuccessModal(testData.name);

    orderPage.clickOnModalOkBtn();
  });
});
