/// <reference types='cypress' />

import CartPageObject from '../support/pages/cart.pageObject';
// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartPageObject();

describe('Checkout flow', () => {
  before(() => {
    cy.task('generateCustomer').as('customer');
  });

  it('should buy an item', function() {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct(this.customer.productName);
    homePage.clickOnAddToCart();
    homePage.assertAllert('Product added');
    homePage.clickOnLink('Cart');

    cartPage.assertProductAdded(this.customer.productName);
    cartPage.clickOnBtn('Place Order');
    cartPage.typeName(this.customer.firstName);
    cartPage.typeCountry(this.customer.country);
    cartPage.typeCity(this.customer.city);
    cartPage.typeCard(this.customer.creditCard);
    cartPage.typeMonth(this.customer.month);
    cartPage.typeYear(this.customer.year);
    cartPage.clickOnBtn('Purchase');
    cartPage.assertCustomerInfo(this.customer.firstName,
      this.customer.creditCard);
    cartPage.clickOnBtn('OK');
  });
});
