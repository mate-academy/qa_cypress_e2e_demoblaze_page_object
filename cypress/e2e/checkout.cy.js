import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import PurchaseFormPageObject from '../support/pages/purchaseForm.pageObject';
import PurchaseConfirmationPageObject
  from '../support/pages/purchaceConfirmation.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const purchaseForm = new PurchaseFormPageObject();
const purchaseConfirmation = new PurchaseConfirmationPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.random.word(),
  city: faker.random.word(),
  card: faker.finance.account(16),
  month: faker.random.word(),
  year: faker.finance.account(4)
};

describe('', () => {
  before(() => {

  });

  it('', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnButton('Add to cart');
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    homePage.assertProductinthecart('Sony vaio i7');
    homePage.clickOnButton('Place Order');
    purchaseForm.fillName(testData.name);
    purchaseForm.fillCountry(testData.country);
    purchaseForm.fillCity(testData.city);
    purchaseForm.fillCreditCard(testData.card);
    purchaseForm.fillMonth(testData.month);
    purchaseForm.fillYear(testData.year);
    purchaseForm.clickOnButton('Purchase');
    purchaseConfirmation.assertDataAfterPurchase(testData.name);
    purchaseConfirmation.assertDataAfterPurchase(testData.card);
    purchaseConfirmation.clickOnButton('OK');
  });
});
