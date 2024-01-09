import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
// import PageObject from '../support/PageObject';
import PurchaseFormObject from '../support/pages/purchaseForm.pageOnject';
import faker from 'faker';

/// <reference types='cypress' />

const purchaseForm = new PurchaseFormObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month({ abbr: true }),
  year: faker.date.future().getFullYear(),
  successMessage: 'Thank you for your purchase!'
};

describe('Cypress: Demoblaze (POM basics)', () => {
  beforeEach(() => {
    homePage.visit();
  });

  it('should automate the next flow using POM ', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    purchaseForm.clickOnaddToCartBtn();
    purchaseForm.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    purchaseForm.itemInCart('Sony vaio i7');
    purchaseForm.clickOnplaceOrderBtn();
    purchaseForm.typeName(testData.name);
    purchaseForm.typeCountry(testData.country);
    purchaseForm.typeCity(testData.city);
    purchaseForm.typeCard(testData.creditCard);
    purchaseForm.typeMonth(testData.month);
    purchaseForm.typeYear(testData.year);
    purchaseForm.clickOnmakePurchaseBtn();
    purchaseForm.purchaseDone(testData.successMessage);
    purchaseForm.purchaseDone(testData.name);
    purchaseForm.purchaseDone(testData.creditCard);
  });
});
