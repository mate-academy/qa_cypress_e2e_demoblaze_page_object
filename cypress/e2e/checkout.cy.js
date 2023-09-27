import HomePageObject from './support/pages/Home.pageObject';
import ProductPageObject from './support/pages/Product.pageObject';
import CartPageObject from './support/pages/Cart.pageObject';
import faker from 'faker';

const HomePage = new HomePageObject();
const ProductPage = new ProductPageObject();
const CartPage = new CartPageObject();
const testData = {
  category: 'Laptops',
  product: 'Sony vaio i7',
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  cardNumber: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: Cypress._.random(2023, 2030),
  successMessage: 'Thank you for your purchase'
};

describe('should allow the user to order the product', () => {
  before(() => {
    HomePage.visit();
  });

  it('should allow to order the product', () => {
    HomePage.clickOnCategory(testData.category);
    HomePage.clickOnProduct(testData.product);
    ProductPage.clickOnAddBtn();
    ProductPage.verifyAlert();
    HomePage.clickOnLink('Cart');
    CartPage.verifyProduct(testData.product);
    CartPage.PlaceOrderButton();
    CartPage.addName(testData.name);
    CartPage.addName(testData.country);
    CartPage.addName(testData.city);
    CartPage.addName(testData.cardNumber);
    CartPage.addName(testData.month);
    CartPage.addName(testData.year);
    CartPage.PurchaseButton();
    CartPage.verifySuccessMessage(testData.message, testData.name,
      testData.cardNumber);
    CartPage.OkButton();
  });
});
