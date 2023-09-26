import faker from 'faker';

import PurchaseFormPageObject from '../support/pages/purchaseForm.cy';
import ClickOnTheLaptops from '../support/pages/laptopPage.cy';
import MainPage from '../support/pages/visitWebSite.cy';
import Cart from '../support/pages/cartPage.cy';

const purchaseForm = new PurchaseFormPageObject();
const laptopPage = new ClickOnTheLaptops();
const website = new MainPage();
const checkIn = new Cart();
/// <reference types='cypress' />

const testingData = {
  name: faker.name.firstName(),
  countryname: faker.address.country(),
  cityname: faker.address.city(),
  card: '9999 9999 9999 9999',
  month: faker.date.month(),
  year: '2023'
};

describe('make order on the website', () => {
  beforeEach(() => {
    website.visit();
  });

  it('should select laptop and add to the cart', () => {
    laptopPage.selectLaptopsCategory();
    laptopPage.selectSonyLaptop();
    laptopPage.clickOnTheAddBtn();
  });

  it('checking added product to the cart', () => {
    laptopPage.selectLaptopsCategory();
    laptopPage.selectSonyLaptop();
    laptopPage.clickOnTheAddBtn();
    checkIn.CheckingLaptopInTheCart();
  });

  it('filled in payment form', () => {
    laptopPage.selectLaptopsCategory();
    laptopPage.selectSonyLaptop();
    laptopPage.clickOnTheAddBtn();
    laptopPage.clickOnTheOrderBtn();
    purchaseForm.typeName(testingData.name);
    purchaseForm.typeCountryName(testingData.countryname);
    purchaseForm.typeCityName(testingData.cityname);
    purchaseForm.typeCreditCardNumber(testingData.card);
    purchaseForm.typeMonthCard(testingData.month);
    purchaseForm.typeYearCard(testingData.year);
    purchaseForm.clickOnPurchaseBtn();
    purchaseForm.assertData(testingData.name, testingData.card);
  });
});
