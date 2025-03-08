/// <reference types='cypress' />

import { faker } from '@faker-js/faker';
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';

const homeCatalogue = new HomeAndCataloguePageObject();
const name = faker.person.firstName();
const country = faker.location.country();
const city = faker.location.city();
const card = faker.finance.creditCardNumber();
const month = new Date().getMonth();
const year = new Date().getFullYear();

describe('Demoblaze', () => {
  before(() => {
    homeCatalogue.visit();
  });

  it('should place order', () => {
    homeCatalogue.clickOnCategory('Laptops');
    homeCatalogue.clickOnProduct('Sony vaio i7');
    homeCatalogue.clickOnAddToCartBtn();
    homeCatalogue.verifyAddingToCart();

    homeCatalogue.clickOnLink('Cart');
    homeCatalogue.verifyProductsInCart();

    homeCatalogue.clickOnPlaceOrderBtn();
    homeCatalogue.fillNameField(name);
    homeCatalogue.fillCountryField(country);
    homeCatalogue.fillCityField(city);
    homeCatalogue.fillCreditCardField(card);
    homeCatalogue.fillMonthField(month);
    homeCatalogue.fillYearField(year);
    homeCatalogue.clickOnPurchaseBtn();
    homeCatalogue.verifyPurchasing(name, card);
    homeCatalogue.clickOnOkBtn();
  });
});
