/// <reference types='cypress' />
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CartFormPageObject from '../support/pages/cartForm.pageObject';
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const cartForm = new CartFormPageObject();

describe('Demoblaze Flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should buy a laptop and fill out the form', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    cy.get('a[onclick="addToCart(9)"]').click();
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cy.get('tr.success').contains('Sony vaio i7');
    cy.contains('button.btn-success', 'Place Order').click();

    cartForm.typeName(faker.name.findName());
    cartForm.typeCountry(faker.address.country());
    cartForm.typeCity(faker.address.city());
    cartForm.typeCreditCard(faker.finance.creditCardNumber());
    cartForm.typeMonth(faker.date.month());
    cartForm.typeYear(faker.random.number({ min: 1970, max: 2023 }));
    cartForm.clickOnPurchaseBtn();
    cy.contains('Thank you for your purchase!').should('exist');
    cy.get('.confirm').click();
  });
});
