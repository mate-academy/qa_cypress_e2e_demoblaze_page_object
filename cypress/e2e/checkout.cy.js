/// <reference types='cypress' />
import { HomePage } from '../support/homePage.pageObject';
import { Cart } from '../support/cart.pageObject';

describe('demoblaze', () => {
  let user;
  const homePage = new HomePage();
  const cartPage = new Cart();
  before(() => {
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });

    homePage.visit();
  });

  it('should be able to add and delete producr from the cart', () => {
    homePage.categoryList('Laptops').click();
    homePage.openProduct(user.product);
    homePage.clickAddToCartButton();
    homePage.assertAllert('Product added');
    homePage.clickLinkCart();

    homePage.checkProduct(user.product);
    homePage.checkUrl(cartPage.url);
    cartPage.clickplaceOrder();
    cy.wait(1000);
    cartPage.inputData('name').type(user.username);
    cartPage.inputData('country').type(user.country);
    cartPage.inputData('city').type(user.city);
    cartPage.inputData('card').type(user.card);
    cartPage.inputData('month').type(user.month);
    cartPage.inputData('year').type(user.year);
    cartPage.clickPurchace();
    cartPage.checkUserInAlert(user.username);
    cartPage.clickConfirmButton();
  });
});
