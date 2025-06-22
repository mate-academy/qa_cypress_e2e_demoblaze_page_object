/// <reference types='cypress' />
import HomeAndCataloguePageObject from
  '../support/pages/homeCatalogue.pageObject';
import PageObject from
  '../support/PageObject';
import CartPage from
  '../support/pages/cartPage.pageObject';

const homePage = new HomeAndCataloguePageObject();
const pageObject = new PageObject();
const cartPage = new CartPage();

describe('assert add product to cart and proceed to checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('Add to Cart and Checkout', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    homePage.clickOnAddToCartButton();
    pageObject.assertAllert('Product added');

    homePage.clickOnLink('Cart');
    cartPage.assertProduct('Sony vaio i7');
    cartPage.clickPlaceOrderBttn();

    cartPage.fillOrderFormAndPurchase();

    cartPage.assertConfirmationMessage();

    cartPage.clickOkButton();
  });
});
