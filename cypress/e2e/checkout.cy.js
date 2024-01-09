import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import CartProductObject from '../support/pages/cartProduct.pageObject';
/// <reference types='cypress' />
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const cartPage = new CartProductObject();
const user = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.datatype.number({
    min: 1000000000000000,
    max: 9000000000000000
  }),
  month: faker.date.month(),
  year: faker.random.number({ min: 2024, max: 2040 }),
  successMessage: 'Thank you for your purchase!'
};


describe('Demoblaze', () => {
  before(() => {
  homePage.visit();
  });

  it('should allow to place an order', () => {
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    cartPage.clickOnaddToCartBtn();
    cy.wait(1000);
    cartPage.assertAllert('Product added');
    homePage.clickOnLink('Cart');
    cartPage.assertItemInTheCart();

 

    cy.clock();
    cartPage.clickOnButton('Place Order');
    cy.tick(5000);
    cy.clock().invoke('restore');

    cartPage.userName(user.name);
    cartPage.userCountry(user.country);
    cartPage.userCity(user.city);
    cartPage.userCard(user.card);
    cartPage.userMonth(user.month);
    cartPage.userYear(user.year);

    cartPage.clickOnmakePurchaseBtn();
    cartPage.purchaseDone(user.successMessage);


    cartPage.confirmButton('OK');
  });
});
