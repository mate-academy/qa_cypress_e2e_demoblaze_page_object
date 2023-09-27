import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import OrderConfirmationPageObject
  from '../support/pages/orderConfirmationPage.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const orderConfirmation = new OrderConfirmationPageObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.address.country(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.future(1).toLocaleDateString('en-US',
    { year: 'numeric', month: '2-digit' }),
  year: faker.date.future(1).getFullYear(),
  successMessage: 'Thank you for your purchase!',
  amount: '790'
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide an ability to place an order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton('Add to cart');
    homePage.alertAssert('Product added');
    homePage.clickOnLink('Cart');
    homePage.productAssert('Sony vaio i7');
    homePage.clickOnButton('Place Order');

    orderConfirmation.fillName(testData.name);
    orderConfirmation.fillCountry(testData.country);
    orderConfirmation.fillCity(testData.name);
    orderConfirmation.fillCreditCard(testData.card);
    orderConfirmation.fillMonth(testData.month);
    orderConfirmation.fillYear(testData.year);

    homePage.clickOnButton('Purchase');

    orderConfirmation.assertSuccessMessage(testData.successMessage);
    orderConfirmation.assertOrderAmount(testData.amount);
    orderConfirmation.assertCardNumber(testData.card);
    orderConfirmation.assertName(testData.name);
  });
});
