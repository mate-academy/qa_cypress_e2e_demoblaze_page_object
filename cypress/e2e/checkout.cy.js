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

  it('should be able to add and delete product from the cart', () => {
    homePage.openCategoryList('Laptops');
    homePage.openProduct(user.product);
    homePage.clickAddToCartButton();
    homePage.assertAllert('Product added');
    homePage.clickLinkCart();

    homePage.checkProduct(user.product);
    cartPage.checkUrl(cartPage.url);
    cartPage.clickplaceOrder();
    cy.wait(1000);
    cartPage.inputNameField(user.username);
    cartPage.inputCountryField(user.country);
    cartPage.inputCityField(user.city);
    cartPage.inputCardFiled(user.card);
    cartPage.inputMonthFiled(user.month);
    cartPage.inputYearField(user.year);
    cartPage.clickPurchace();
    cartPage.checkUserInAlert(user.username);
    cartPage.clickConfirmButton();
  });
});
