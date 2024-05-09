/// <reference types='cypress' />

import PageObject from '../support/PageObject'
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject'
import cartPageObject from '../support/pages/cart.pageObject'

const WholePage = new PageObject
const HomePage = new HomeAndCataloguePageObject()
const CartPage = new cartPageObject()

describe('', () => {
  let user
  
  beforeEach(() => {
    cy.task('generateUser').then(generateUser => {
      user = generateUser
    })
  });

  it('', () => {
  cy.visit('/#/');
  HomePage.laptopLink
  HomePage.clickOnProduct('Sony vaio i7')
  HomePage.addToCartBtn
  WholePage.assertAllert(`Product added`)
  cy.visit('/cart.html')
  cy.contains('Sony vaio i7').should('exist')
  HomePage.addToCartBtn
  CartPage.fillName
  CartPage.fillCountry
  CartPage.fillCity
  CartPage.fillCreditCart
  CartPage.fillMonth
  CartPage.fillYear
  CartPage.purchaseBtn
  CartPage.okBtn
  });
});
