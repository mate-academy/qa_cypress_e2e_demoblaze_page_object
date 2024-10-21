/// <reference types='cypress' />
// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();

const testData = {
  product: 'Sony vaio i7',
  category: 'Laptops',
  alertMessage: 'Product added',
  name: 'Tetiana',
  country: 'Ukraine',
  city: 'Lviv',
  card: '4444 5647 4657 1736',
  month: '10',
  year: '2024'
};

describe('Demoblaze Checkout Flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should complete checkout flow', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);
    homePage.addToCart();
    homePage.assertAlert(testData.alertMessage);
    homePage.clickOnCart();
    homePage.placeholder();
    homePage.fillOrderForm(
      testData.name,
      testData.country,
      testData.city,
      testData.card,
      testData.month,
      testData.year
    );

    homePage.purchase();
    homePage.assertSuccessModal();
    homePage.confirmOk();
  });
});
