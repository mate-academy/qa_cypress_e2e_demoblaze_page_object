/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.random.word(),
  city: faker.random.word(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: Math.floor(2000 + Math.random() * 25),
  category: 'Laptops',
  product: 'Sony vaio i7',
  confirmMessage: 'Thank you for your purchase!'
};

describe('Checkout flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow to add the product to the cart and place the order', () => {
    homePage.clickOnCategory(testData.category);
    homePage.clickOnProduct(testData.product);

    productPage.clickOnAddToCartBtn();

    productPage.assertAllert('Product added');

    homePage.clickOnLink('Cart');

    cartPage.addedProduct.should('contain', testData.product);

    cartPage.clickOnPlaceOrderBtn();

    cartPage.typeName(testData.name);
    cartPage.typeCountry(testData.country);
    cartPage.typeCity(testData.city);
    cartPage.typeCreditCard(testData.creditCard);
    cartPage.typeMonth(testData.month);
    cartPage.typeYear(testData.year);
    cartPage.clickOnPurchaseBtn();

    cartPage.confirmModal.should('contain', testData.confirmMessage)
      .and('contain', testData.name)
      .and('contain', testData.creditCard);

    cartPage.clickOnOkBtn();
  });
});
