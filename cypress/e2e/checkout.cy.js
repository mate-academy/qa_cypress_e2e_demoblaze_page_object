import PurchaseFormObject from '../support/pages/purchaseForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const purchaseForm = new PurchaseFormObject();
const homePage = new HomeAndCataloguePageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.datatype.number(),
  successMessage: 'Thank you for your purchase!'
};

describe('Demoblaze app', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to buy an item', () => {
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
