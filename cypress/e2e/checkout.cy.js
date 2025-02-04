/// <reference types='cypress' />
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject
  from '../support/pages/product.pageObject';
import CartPageObject
  from '../support/pages/cart.pageObject';
import OrderPageObject
  from '../support/pages/order.pageObject';
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();
const orderPage = new OrderPageObject();

const orderData = {
  name: faker.name.firstName(),
  country: faker.random.words(),
  city: faker.random.words(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear().toString(),
  successMessage: 'Thank you for your purchase!'
};

describe('Product checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to purchase the order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.clickOnAddToCartBtn();
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.cartItemName.should('contain', 'Sony vaio i7');
    cartPage.clickOnPlaceOrder();

    orderPage.typeName(orderData.name);
    orderPage.typeCountry(orderData.country);
    orderPage.typeCity(orderData.city);
    orderPage.typeCreditCardNumber(orderData.creditCard);
    orderPage.typeMonth(orderData.month);
    orderPage.typeYear(orderData.year);
    orderPage.clickOnPurchaseBtn();
    orderPage.verifySuccessMessage(orderData.successMessage);
    orderPage.verifyOrderDetails(orderData.name, orderData.creditCard);
    cy.get('.confirm').click();
    cy.visit('https://www.demoblaze.com/index.html');
  });
});
