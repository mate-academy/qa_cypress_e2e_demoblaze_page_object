/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CartFormPageObject from '../support/pages/cartForm.pageObject';
import ProductPageObject from '../support/pages/product.pageObejct';
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const cartForm = new CartFormPageObject();
const productPage = new ProductPageObject();
const fakeData = {
  name: faker.name.findName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear(),
  product: 'Sony vaio i7',
  category: 'Laptops'
};

describe('Purchase flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should order a laptop', () => {
    homePage.clickOnCategory(fakeData.category);
    homePage.clickOnProduct(fakeData.product);
    productPage.clickOnAddToCartButton();
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartForm.findProductInTheCart(fakeData.product).should('exist');
    cartForm.clickOnPlaceOrderButton();
    cartForm.typeName(fakeData.name);
    cartForm.typeCountry(fakeData.country);
    cartForm.typeCity(fakeData.city);
    cartForm.typeCreditCard(fakeData.creditCard);
    cartForm.typeMonth(fakeData.month);
    cartForm.typeYear(fakeData.year);
    cartForm.clickOnPurchaseBtn();
    cy.contains('h2', 'Thank you for your purchase!').should('exist');
    cy.contains('p', `Name: ${fakeData.name}`).should('exist');
    cy.contains('p', `Card Number: ${fakeData.creditCard}`).should('exist');
    cartForm.clickOnOkButton();
  });
});
