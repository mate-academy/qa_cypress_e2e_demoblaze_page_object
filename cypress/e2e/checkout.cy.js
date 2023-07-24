/// <reference types='cypress' />
// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ProductPageObject from '../support/pages/productPageObject';
import CartPageObject from '../support/pages/cartPageObject';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

describe('Demoblaze POM', () => {
  let info;

  before(() => {
    homePage.visit();
    cy.task('placeOrder').then((placeOrder) => {
      info = placeOrder;
    });
  });

  it('should allow to add product to the cart', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.addToCartBtn();
    productPage.allertMessage('Product added');
    homePage.clickOnLink('Cart');
    cartPage.cartProduct('Sony vaio i7');
    cartPage.placeOrder();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000);
    cartPage.typeName(info.name);
    cartPage.typeCountry(info.country);
    cartPage.typeCity(info.city);
    cartPage.typeCard(info.card);
    cartPage.typeMonth(info.month);
    cartPage.typeYear(info.randomYear);
    cartPage.purchaseBtn();
    cartPage.successMessage(info.card, info.name, info.successMessage);
    cartPage.okButton();
  });
});
