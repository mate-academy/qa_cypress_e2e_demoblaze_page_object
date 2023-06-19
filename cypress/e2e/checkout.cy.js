import faker from 'faker';
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();
const product = 'Sony vaio i7';
const user = {
  userName: faker.name.findName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: '1111 1111 1111 1111',
  month: faker.date.month(),
  year: faker.date.past().getFullYear()
}

describe('Cart function', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to by a product', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(product);
    homePage.addProductToTheCart('Add to cart');
    homePage.assertAddedProduct();
    homePage.clickOnLink('Cart');
    cartPage.assertProductInTheCart(product);
    cartPage.placeOrder();
    cartPage.enterName(user.userName);
    cartPage.enterCountry(user.country);
    cartPage.enterCity(user.city);
    cartPage.enterCreditCard(user.creditCard);
    cartPage.enterMonth(user.month);
    cartPage.enterYear(user.year);
    cartPage.clickToPurchase();
    cartPage.confirmTheData(user.creditCard, user.userName);
    cartPage.clickOnModalWindow();

  });
});
