/// <reference types='Cypress' />

// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();

const product = 'Sony vaio i7';
const category = 'Laptops';
const userData = {
  name: 'Jan',
  country: 'Poland',
  city: 'Warsaw',
  creditCard: '1122334455667788',
  month: 'September',
  year: '2025'
};

describe('Checkout', () => {
  before(() => {
    homePage.visit(homePage.url);
  });

  it('should allow to purchase a product', () => {
    homePage.clickOnCategory(category);
    homePage.clickOnProduct(product);
    cy.contains('.btn', 'Add to cart').click();
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('td').should('contain.text', product);

    cy.contains('.btn', 'Place Order').click();

    homePage.typeName(userData.name);
    homePage.typeCountry(userData.country);
    homePage.typeCity(userData.city);
    homePage.typeCard(userData.creditCard);
    homePage.typeMonth(userData.month);
    homePage.typeYear(userData.year);
    homePage.clickOnPurchaseBtn();

    cy.get('.lead text-muted ').should('contain.text', `Card Number: ${userData.creditCard}`);
    cy.get('.lead text-muted ').should('contain.text', `Name: ${userData.name}`);
    homePage.clickOnOkBtn();
  });
});
