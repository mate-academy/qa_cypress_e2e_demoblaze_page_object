/// <reference types='cypress' />

import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import ProductDetailPageObject from "../support/pages/productDetailPage.pageObject"; 

const homePage = new HomeAndCataloguePageObject;
const productPage = new ProductDetailPageObject;

describe('', () => {
  before(() => {

  });

  it('', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.addToCart;  
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added`);
  })
  });
});
