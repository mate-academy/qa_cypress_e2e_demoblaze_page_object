/// <reference types='cypress' />

import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

describe('', () => {
  before(() => {
    homePage.visit();
  });

  it('', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.clickOnAddToCartBtn('Add to cart');
    productPage.assertAlert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.cartProduct('Sony vaio i7');
    cartPage.placeOrder();
    cartPage.typeName('Danylo');
    cartPage.typeCountry('Ukraine');
    cartPage.typeCity('Kyiv');
    cartPage.typeCard('471828930012934');
    cartPage.typeMonth(12);
    cartPage.typeYear(1995);
    cartPage.purchaseBtn();
    cartPage.successMessage(
      '471828930012934',
      'Danylo',
      'Thank you for your purchase!'
    );
    cartPage.okButton();
  });
});
