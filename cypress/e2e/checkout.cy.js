import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
import CartPageObject from '../support/pages/cart.PageObject';
import ProductPagePageObject
  from '../support/pages/productPage.PageObject';
const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPagePageObject();
const cartPage = new CartPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: '1111222233334444',
  month: faker.date.month(),
  year: (() => {
    const randomYear = faker.random.number({min: 2023,max: 2100});
    return randomYear;
  })(),
  categoryName: 'Laptops',
  productName: 'Sony vaio i7',
  assertMessage: 'Thank you for your purchase!'
};

describe('Checkout process', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow to add items to the cart and make a purchase', () => {
    productPage.visit();
    productPage.clickOnAddToCartButton();
    productPage.assertAllert();
    homePage.clickOnLink('Cart');
    cartPage.assertProduct(testData.productName);
    cartPage.clickOnPlaceOrderButton();
    cartPage.enterName(testData.name);
    cartPage.enterCountry(testData.country);
    cartPage.enterCity(testData.city);
    cartPage.enterCreditCard(testData.creditCard);
    cartPage.enterMonth(testData.month);
    cartPage.enterYear(testData.year);
    cartPage.clickOnPurchaseButton();
    cartPage.assertAlert(testData.name,testData.creditCard);
    cartPage.clickOkButton();
  });
});
