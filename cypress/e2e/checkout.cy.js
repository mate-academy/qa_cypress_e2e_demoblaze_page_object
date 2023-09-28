import faker from 'faker';

import CheckoutForm from '../support/pages/purchaseForm.cy';
import LaptopPage from '../support/pages/laptopPage.cy';
import MainPage from '../support/pages/visitWebSite.cy';
import Cart from '../support/pages/cartPage.cy';

const purchaseForm = new CheckoutForm();
const laptopPage = new LaptopPage();
const website = new MainPage();
const checkIn = new Cart();
/// <reference types='cypress' />

const testingData = {
  name: faker.name.firstName(),
  countryname: faker.address.country(),
  cityname: faker.address.city(),
  card: '9999 9999 9999 9999',
  month: faker.date.month(),
  year: '2023',
  amount: '790',
  message: 'Thank you for your purchase!'
};

describe('make order on the website', () => {
  beforeEach(() => {
    website.visit();
  });

  it('should add laptop and make purchasse', () => {
    laptopPage.selectLaptopsCategory();
    laptopPage.selectSonyLaptop();
    laptopPage.clickOnTheAddBtn();
    purchaseForm.assertAddedProduct();
    checkIn.CheckingLaptopInTheCart();
    laptopPage.clickOnTheCartLink();
    laptopPage.clickOnTheOrderBtn();
    purchaseForm.typeName(testingData.name);
    purchaseForm.typeCountryName(testingData.countryname);
    purchaseForm.typeCityName(testingData.cityname);
    purchaseForm.typeCreditCardNumber(testingData.card);
    purchaseForm.typeMonthCard(testingData.month);
    purchaseForm.typeYearCard(testingData.year);
    purchaseForm.clickOnPurchaseBtn();
    purchaseForm.assertOrderMessage(testingData.message);
    purchaseForm.assertForAmountField(testingData.amount);
    purchaseForm.assertForCardNumberField(testingData.card);
    purchaseForm.assertForNameField(testingData.name);
    purchaseForm.clickOnOkBtn();
  });
});
