import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject
  from '../support/pages/productPage.pageObject';
import CartPageObject
  from '../support/pages/cartPage.pageObject';
import OrderFormPageObject
  from '../support/pages/orderForm.pageObject';
import faker
  from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const orderForm = new OrderFormPageObject();
const testData = {
  category: 'Laptops',
  product: 'Sony vaio i5',
  navigation: 'Cart',
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: 2023,
  successMessage: 'Product added'
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should be proceeding successfully', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);

    productPage.clickOnAddToCartBtn();
    productPage.assertAllert(testData.successMessage);

    homePage.clickOnLink(testData.navigation);

    cartPage.assertProductInCart(testData.product);
    cartPage.clickOnPlaceOrderBtn();

    orderForm.typeName(testData.name);
    orderForm.typeCountry(testData.country);
    orderForm.typeCity(testData.city);
    orderForm.typeCard(testData.card);
    orderForm.typeMonth(testData.month);
    orderForm.typYear(testData.year);
    orderForm.clickOnPurchaseBtn();
    orderForm.assertCardNumberInModal(testData.card);
    orderForm.assertNameInModal(testData.name);
    orderForm.clickOnConfirmModalBtn();
  });
});
