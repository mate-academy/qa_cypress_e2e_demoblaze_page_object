/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
const homeAndCataloguePageObject = new HomeAndCataloguePageObject();
const cartPageObject = new CartPageObject();

describe('', () => {
  before(() => {});

  it('should have the ability to make a purchase', () => {
    const categoryName = 'Laptops';
    const itemName = 'Sony vaio i7';
    const name = 'Tetiana';
    const country = 'Ukraine';
    const city = 'Kyiv';
    const card = 35713;
    const monthOfCard = 12;
    const yearOfCard = 2025;
    const currentDate = cartPageObject.currentDate;

    homeAndCataloguePageObject.visit();
    homeAndCataloguePageObject.clickOnCategory(categoryName);
    homeAndCataloguePageObject.clickOnProduct(itemName);
    homeAndCataloguePageObject.clickOnAddToCartButton();
    cy.wait(3000);
    homeAndCataloguePageObject.assertAllert('Product added');
    homeAndCataloguePageObject.clickOnLink('Cart');
    cartPageObject.assertTitleIsHaveText(itemName + '\n');
    cartPageObject.clickOnPlaceOrderButton();
    cy.wait(1000);
    cartPageObject.nameField.type(name);
    cartPageObject.countryField.type(country);
    cartPageObject.cityField.type(city);
    cartPageObject.cardField.type(card);
    cartPageObject.monthField.type(monthOfCard);
    cartPageObject.yearField.type(yearOfCard);
    cartPageObject.clickOnPurchaseButton();
    cartPageObject.assertSuccessfulPurchase('Thank you for your purchase!');
    cartPageObject.assertDataOfModal('Amount: 790 USD');
    cartPageObject.assertDataOfModal(`Card Number: ${card}`);
    cartPageObject.assertDataOfModal(`Name: ${name}`);
    cartPageObject.assertDataOfModal(`Date: ${currentDate}`);
    cartPageObject.okButtonOfModal.click();
  });
});
