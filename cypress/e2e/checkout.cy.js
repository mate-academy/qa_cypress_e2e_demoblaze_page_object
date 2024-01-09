/// <reference types='cypress' />
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
const faker = require('faker');

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();
const buyer = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.datatype.number({
    min: 1000000000000000,
    max: 9000000000000000
  }),
  month: faker.date.month(),
  year: faker.random.number({ min: 2024, max: 2040 })
};

describe('Cart page', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow to place an order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    homePage.clickOnButton('Add to cart');

    cy.window().then((win) => {
      cy.stub(win, 'alert').as('windowAlert');
      cy.get('@windowAlert').should('have.been.calledWith', 'Product added');
    });

    homePage.clickOnLink('Cart');
    cy.get('.table-responsive').should('contain', 'Sony vaio i7');
    cy.clock();
    cartPage.clickOnButton('Place Order');
    cy.tick(5000);
    cy.clock().invoke('restore');

    cartPage.buyerName(buyer.name);
    cartPage.buyerCountry(buyer.country);
    cartPage.buyerCity(buyer.city);
    cartPage.buyerCard(buyer.card);
    cartPage.buyerMonth(buyer.month);
    cartPage.buyerYear(buyer.year);

    cartPage.clickOnButton('Purchase');

    cy.get('.sweet-alert').should('contain', 'Thank you for your purchase')
      .and('contain', buyer.card)
      .and('contain', buyer.name);

    cartPage.confirmButton('OK');
  });
});
