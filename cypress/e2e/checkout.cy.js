/// <reference types='cypress' />
import PageObject from '../support/PageObject';
import OrderFormPageObject from '../support/pages/orderForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import { faker } from '@faker-js/faker';

const orderForm = new OrderFormPageObject();
const homePage = new HomeAndCataloguePageObject();
const allertMessage = new PageObject();

const testData = {
  name: faker.person.firstName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: '07',
  year: '2026',
  successMessage: 'Thanks you for your purchase!'
};

describe('', () => {
  before(() => {
    homePage.visit();
  });

  it('should provide the ability to add product to the cart', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    cy.get('[onclick="addToCart(9)"]').click();
    allertMessage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.contains('td', 'Sony vaio i7').should('be.visible');
    cy.get('.col-lg-1 > .btn').click();
    orderForm.typeName(testData.name);
    orderForm.typeCountry(testData.country);
    orderForm.typeCity(testData.city);
    orderForm.typeCard(testData.creditCard);
    orderForm.typeMonth(testData.month);
    orderForm.typeYear(testData.year);
    orderForm.clickOnPurchaseBtn();

    orderForm.assertAllert(testData.successMessage);
    cy.get('.confirm').click();
  });
});
