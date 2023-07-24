/// <reference types='cypress' />
import faker from 'faker';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import productPageObject from '../support/pages/product.pageObject';
import cartPageObject from '../support/pages/cart.pageObject';

const homePage = new HomeAndCataloguePageObject();
const productPage = new productPageObject();
const cartPage = new cartPageObject();

const user = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: Math.floor(Math.random(16) * 16),
  month: faker.date.month(),
  year: '2000'
}

describe('', () => {
  beforeEach(() => {
    homePage.visit();
  });

  it('should go through main user flow', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.clickOnButton('Add to cart');
    cy.wait(5000);
    productPage.assertAlert('Product added');
    productPage.clickOnLink('Cart');
    cartPage.assertPhone('Sony vaio i7');
    cartPage.clickOnButton('Place Order');
    cartPage.typeInField('name', user.name);
    cartPage.typeInField('country', user.country);
    cartPage.typeInField('city', user.city);
    cartPage.typeInField('card', user.creditCard);
    cartPage.typeInField('month', user.month);
    cartPage.typeInField('year', user.year);
    cartPage.clickOnButton('Purchase');
    cartPage.assertText(user.name);
    cartPage.clickOnButton('OK');
  });
});
