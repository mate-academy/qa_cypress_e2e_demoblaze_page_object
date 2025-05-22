/// <reference types='cypress' />
import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import { ProductPage } from '../support/pages/ProductPage';
import { CartPage } from '../support/pages/CartPage';
import { faker } from '@faker-js/faker';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPage();
const cartPage = new CartPage();

describe('', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('should provide an ability to buy a product with no login', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    productPage.productName.should('contain.text', 'Sony vaio i7');
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alert');
    });

    productPage.clickBuyButton();

    // alert detection

    cy.get('@alert').should('have.been.calledOnce');

    // next go to cart

    homePage.clickOnLink('Cart');

    cartPage.firstProduct
      .should('exist')
      .should('contain.text', 'Sony vaio i7');

    cartPage.clickCheckOut();

    cartPage.modal.should('exist');

    cartPage.nameInput.should('be.visible').type('Mykola');
    cartPage.countryInput.should('be.visible').type('Poland');
    cartPage.cardInput.should('be.visible').type('1233 3321 1123 3321');
    cartPage.yearInput.should('be.visible').type('1233211232321');
    cartPage.cityInput.should('be.visible').type('Warszaw');
    cartPage.monthInput.should('be.visible').type('January');

    cartPage.clickModalSubmit();

    cartPage.modalTitle.should('exist').should('contain.text', 'Thank you for your purchase!');

    cartPage.clickModalConfirm();
  });
});
