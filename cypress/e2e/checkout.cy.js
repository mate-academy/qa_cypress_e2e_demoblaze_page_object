import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CartPageObject
  from '../support/pages/cart.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

const user = {
  name: faker.name.firstName(),
  country: faker.random.words(),
  city: faker.random.words(),
  month: faker.random.word(),
  creditCard: '1234 5678 9012 3456'
};

describe('Demoblaze', () => {
  before(() => {
    homePage.visit();

    cy.viewport(1920, 1080);
  });

  it('should add the product to the Cart and purcase it', () => {
    homePage.clickOnCategory('Laptops');

    homePage.clickOnProduct('Sony vaio i7');

    homePage.clickOnButton('Add to cart');

    homePage.assertAllert('Product added');

    homePage.clickOnLink('Cart');

    cartPage.assertProductInCart('Sony vaio i7');

    cartPage.clickOnButton('Place Order');

    cy.get('[id="orderModalLabel"]').should('contain', 'Place order');

    cy.get('.modal-body').should('contain', 'Name', 'Country');

    cartPage.typeName(user.name);

    cartPage.typeCountry(user.country);

    cartPage.typeCity(user.city);

    cartPage.typeCreditCard(user.creditCard);

    cartPage.typeMonth(user.month);

    cartPage.typeYear('1999');

    cartPage.clickOnButton('Purchase');

    cartPage.assertName(user.name);

    cartPage.assertCreditCard(user.creditCard);

    cartPage.clickOnButton('OK');
  });
});
