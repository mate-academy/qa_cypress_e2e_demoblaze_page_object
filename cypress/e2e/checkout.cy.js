import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import cartPageObject from '../support/pages/cartpage.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const cartPage = new cartPageObject();

const data = {
  name: 'Alex',
  country: 'Ukraine',
  city: 'Kharkiv',
  card: '12345678',
  month: '03',
  year: '2000'
};

describe('Demoblaze app', () => {
  before(() => {
    cy.visit('/');
  });

  it('should add a product to the cart and place the order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnAddCartBtn();
    cy.on('window:alert', (str) => {
      expect(str).to.contains('Product added');
    });
    homePage.clickOnLink('Cart');

    cartPage.clickOnplaceOrderBtn();
    cartPage.nameField.type(data.name);
    cartPage.countryField.type(data.country);
    cartPage.cityField.type(data.city);
    cartPage.cardField.type(data.card);
    cartPage.monthField.type(data.month);
    cartPage.yearField.type(data.year);

    cartPage.clickOnPurchaseBtn();
    cartPage.alertMessage.should('contain', data.name)
      .should('contain', data.card);
    cartPage.clickOnokConfirmBtn();
  });
});
