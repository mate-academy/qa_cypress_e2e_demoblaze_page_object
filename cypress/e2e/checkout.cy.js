/// <reference types='cypress' />

import PageObject from '../support/PageObject.js';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CardPage from '../support/pages/cardPage.pageObject.js';
import PurchaseFormPageObject
  from '../support/pages/purchaseForm.pageObject.js';

const pageObject = new PageObject();
const homeAndCataloguePage = new HomeAndCataloguePageObject();
const cardPage = new CardPage();
const purchaseForm = new PurchaseFormPageObject();
let user;
const category = 'Laptops';
const productName = 'Sony vaio i7';
const addToCardBtn = 'Add to cart';
const messageAddToCard = 'Product added';
const messageAfterPurchase = 'Thank you for your purchase!';
const placeOrderBtn = 'Place Order';
const purchaseBtn = 'Purchase';
const okBtn = 'OK';

describe('Test flow', () => {
  before(() => {
    cy.task('generateUserData').then((generateUserData) => {
      user = generateUserData;
    });
  });

  it('to make a purchase', () => {
    homeAndCataloguePage.visit();

    homeAndCataloguePage.clickOnCategory(category);
    homeAndCataloguePage.clickOnProduct(productName);
    homeAndCataloguePage.clickOnBtn(addToCardBtn);

    pageObject.assertAllert(messageAddToCard);

    homeAndCataloguePage.cardBtn.click();
    cardPage.poductsTable.should('contain.text', productName);
    homeAndCataloguePage.clickOnBtn(placeOrderBtn);

    purchaseForm.typeName(user.name);
    purchaseForm.typeCountry(user.country);
    purchaseForm.typeCity(user.city);
    purchaseForm.typeCard(user.card);
    purchaseForm.typeMonth(user.month);
    purchaseForm.typeYear(user.year);

    homeAndCataloguePage.clickOnBtn(purchaseBtn);

    cy.textInToH2(messageAfterPurchase);

    homeAndCataloguePage.clickOnBtn(okBtn);
  });
});
