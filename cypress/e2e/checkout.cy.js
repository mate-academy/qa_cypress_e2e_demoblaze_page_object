/// <reference types='cypress' />
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import ProductPageObject
  from '../support/pages/productPageObject';
import CartPage
  from '../support/pages/cartPageObject';

const { faker } = require('@faker-js/faker');

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPage();

const categoryName = 'Laptops';
const productName = 'Sony vaio i7';
const orderName = faker.person.firstName();
const userCountry = faker.location.country();
const creditCard = faker.finance.creditCardNumber();

const month = faker.number.int({ min: 1, max: 12 });
const city = faker.location.city();
const year = faker.number.int({ min: 1900, max: 2024 });

describe('Demoblaze Checkout Flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should complete the checkout process', () => {
    homePage.clickOnCategory(categoryName);
    homePage.clickOnProduct(productName);

    productPage.addToCartBtn.click();
    productPage.assertAllert('Product added');

    cartPage.visitCart();
    cartPage.assertProductInCart(productName);

    cartPage.placeOrderBtn();
    cartPage
      .fillOrderFields(orderName, userCountry, creditCard, month, city, year);

    cartPage.confirmOrder();

    cartPage.assertEnteredDataOnModal(orderName, creditCard);

    cartPage.clickOk();
  });
});
