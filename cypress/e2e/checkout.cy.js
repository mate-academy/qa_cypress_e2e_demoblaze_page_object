/// <reference types='cypress' />

import HomeAndCartPageObject from '../support/pages/homeCatalogCart.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';

const homeCatalogCartPage = new HomeAndCartPageObject();
const nav = new HomeAndCataloguePageObject();

describe('', () => {
  const product = 'Sony vaio i7';

  before(() => {
    homeCatalogCartPage.visit();
    cy.task('generateUser').then((user) => user).as('user');
  });

  it('should buy Sony vaio i7 laptop', function() {
    homeCatalogCartPage.clickOnTheCategory('Laptops');
    homeCatalogCartPage.clickOnDeterminedLink(product);
    homeCatalogCartPage.clickOnDeterminedLink('Add to cart');
    homeCatalogCartPage.checkAlertWindow();
    nav.clickOnLink('Cart');
    homeCatalogCartPage.assertCart(product);

    cy.get('button[data-target="#orderModal"]').click();

    homeCatalogCartPage.sendTheOrder(this.user.username);
  });
});
