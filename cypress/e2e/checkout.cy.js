import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();

const testData = {
  product: 'Sony vaio i7',
  category: 'Laptops',
  alertMessage: 'Product added',
  name: 'Mira',
  country: 'Poland',
  city: 'Gdansk',
  card: '2345 5666 6655 2233',
  month: '12',
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
    homePage.placeOrder();
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
