import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import cartFormPageObject from '../support/pages/cartForm.pageObject';

/// <reference types="cypress" />

const homePage = new HomeAndCataloguePageObject();
const cartForm = new cartFormPageObject();
let category = 'Laptops';
let product = 'Sony vaio i7';

describe('Order', () => {
  before(() => {
    homePage.visit();
  });

  it('User is able to order the product', () => {
    homePage.clickOnCategory(category);
    homePage.clickOnProduct(product);
    cy.contains('Add to cart')
      .click();
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub'); 
      });
      cy.get('@alertStub').should('be.called');
    homePage.clickOnLink('Cart');
    
    cartForm.cartList.should('contain', product);
    cartForm.placeOrderBtn;
    cartForm.nameField;
    cartForm.countryField; 
    cartForm.cityField;
    cartForm.cardField;
    cartForm.monthField;
    cartForm.yearField;
    cartForm.purchaseBtn;
    cartForm.checkMainAlert;
    cartForm.checkNameAlert;
    cartForm.checkCardAlert;  
    cartForm.okBtn;
  });
});
