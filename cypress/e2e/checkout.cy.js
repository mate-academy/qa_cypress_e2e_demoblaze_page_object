import { faker } from '@faker-js/faker';
import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';

const homeCatalogue = new HomeAndCataloguePageObject();
const name = faker.person.firstName();
const country = faker.location.country();
const city = faker.location.city();
const card = faker.finance.creditCardNumber();
const month = faker.date.month();
const year = new Date().getFullYear();

describe('Demoblaze', () => {
  before(() => {
    homeCatalogue.visit();
  });

  it('should add new product in cart', () => {
    homeCatalogue.clickOnCategory('Laptops');
    homeCatalogue.clickOnProduct('Sony vaio i7');
    homeCatalogue.clickOnButton('Add to cart');

    homeCatalogue.verifyAddingToCart('Product added');

    homeCatalogue.clickOnLink('Cart');
    homeCatalogue.verifyProductinCart('Sony vaio i7');

    homeCatalogue.clickOnButton('Place Order');
    homeCatalogue.typeName(name);
    homeCatalogue.typeCountry(country);
    homeCatalogue.typeCity(city);
    homeCatalogue.typeCard(card);
    homeCatalogue.typeMonth(month);
    homeCatalogue.typeYear(year);
    homeCatalogue.clickOnPurchaseBtn();
    homeCatalogue.verifyPurchasing(name, card);
    homeCatalogue.clickOnOkBtn();
  });
});
