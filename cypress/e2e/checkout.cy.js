/// <reference types='cypress' />

import { faker } from '@faker-js/faker';

import { CartPageObject } from '../support/pages/cart.pageObject';
import { ProductPageObject } from '../support/pages/product.pageObject';
// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';

const cartPage = new CartPageObject();
const productPage = new ProductPageObject();
const homePage = new HomeAndCataloguePageObject();

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow to make a purchase', () => {
    const productName = 'Sony vaio i7';
    const categoryName = 'Laptops';

    homePage.clickOnCategory(categoryName);
    homePage.clickOnProduct(productName);

    productPage.addToCart();
    productPage.assertAllert('Product added');

    homePage.clickOnLink('Cart');
    cartPage.contains(productName);

    cartPage.clickOnPlaceOrder();

    const name = faker.person.firstName();
    const cardNumber = faker.finance.creditCardNumber();

    cartPage.fillName(name);
    cartPage.fillCountry('Ukraine');
    cartPage.fillCity('Kyiv');
    cartPage.fillCard(cardNumber);
    cartPage.fillMonth(faker.date.month());
    cartPage.fillYear(faker.date.anytime().getFullYear());

    cartPage.purchase();
    cartPage.assertPurchase(name, cardNumber);
  });
});
