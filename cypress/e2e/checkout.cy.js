/// <reference types="cypress" />
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import faker from 'faker';

const homeCataloguePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

const date = new Date();

const testData = {
  category: 'Laptops',
  device: 'Sony vaio i7',

  name: faker.name.firstName(),
  country: 'Ukraine',
  city: 'Chernivtsi',
  card: faker.finance.account(),
  month: date.getMonth() + 1,
  year: date.getFullYear()
};

describe('Purchase', () => {
  before(() => {
    homeCataloguePage.visit();
  });

  it('Creating an order and purchasing a product', () => {
    homeCataloguePage.clickOnCategory(testData.category);
    homeCataloguePage.clickOnProduct(testData.device);
    cy.contains('.btn', 'Add to cart').click();

    cy.on('window:alert', (alert) => {
      expect(alert).to.eq('Product added');
    })

    homeCataloguePage.clickOnLink('Cart');
    cy.wait(2000);
    cartPage.listOfProducts.should('contain', testData.device);
    cartPage.clickOnBtn('Place Order');

    cartPage.nameField.type(testData.name);
    cartPage.countryField.type(testData.country);
    cartPage.cityField.type(testData.city);
    cartPage.cardField.type(testData.card);
    cartPage.monthField.type(testData.month);
    cartPage.yearField.type(testData.year);

    cartPage.clickOnBtn('Purchase');

    cartPage.modalSucces.should('contain', testData.card);
    cartPage.modalSucces.should('contain', testData.name);
    cartPage.modalSucces.should('contain', testData.month);
    cartPage.modalSucces.should('contain', testData.year);

    cartPage.clickOnBtn('OK');
  });
});
