/// <reference types='cypress' />
import { HomePage } from "../support/homePage.pageObject";
import { Cart } from "../support/cart.pageObject";

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
    homePage.product(user.product).click();
    homePage.clickaddToCartButton();
    homePage.assertAllert('Product added');
    homePage.clickLinkCart();

    cy.contains(user.product).should('exist');
    
    cy.url().should('include', cartPage.url);
    cartPage.clickplaceOrder();
    cartPage.inputData('name').type(user.username);
    cartPage.inputData('country').type(user.country);
    cartPage.inputData('city').type(user.city);
    cartPage.inputData('card').type(user.card);
    cartPage.inputData('month').type(user.month);
    cartPage.inputData('year').type(user.year);
    cartPage.clickPurchace();

    cy.get('.sweet-alert').should('contain', user.username);

    cartPage.clickConfirmButton();

    // cartPage.city.type(user.city);
    // cartPage.card.type(user.card);
    // cartPage.month.type(user.month);
    // cartPage.year.type(user.year);
  });
});
