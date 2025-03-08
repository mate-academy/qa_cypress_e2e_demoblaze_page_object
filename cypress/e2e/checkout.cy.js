/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductDetailPage from '../support/pages/productDetailPage.pageObject';
import CheckoutPageObject from '../support/pages/checkoutForm.pageObject';
import CartPage from '../support/pages/cartPage.pageObject';

describe('Checkout', () => {
  const homePage = new HomeAndCataloguePageObject();
  const checkoutPage = new CheckoutPageObject();
  const productDetails = new ProductDetailPage();
  const cartPage = new CartPage();
  let user;

  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should allow to checkout the product', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productDetails.clickAddToCart();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Product added.');
    });
    homePage.clickOnLink('Cart');
    cy.get('.success').should('contain.text', 'Sony vaio i7');
    cartPage.clickOnPlaceOrderBtn();
    checkoutPage.name.type(user.name);
    checkoutPage.country.type(user.country);
    checkoutPage.city.type(user.city);
    checkoutPage.creditCard.type(user.card);
    checkoutPage.month.type(user.month);
    checkoutPage.year.type(user.year);
    checkoutPage.purchaseBtn.click();
    cy.get('.sweet-alert').should('include.text', user.name);
    cy.get('.sweet-alert').should('include.text', user.card);
    checkoutPage.okBtn.click();
  });
});
