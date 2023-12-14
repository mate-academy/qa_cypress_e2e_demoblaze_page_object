/// <reference types='cypress' />

import HomeAndCataloguePageObject from "../support/pages/homeСatalogue.pageObject";
import ProductDetailPageObject from "../support/pages/productDetailPage.pageObject";
import CartPageObject from "../support/pages/cart.pageObject"; 
import PlaceOrderForm from "../support/pages/placeOrderForm.pageObject";

const homePage = new HomeAndCataloguePageObject;
const productPage = new ProductDetailPageObject;
const cart = new CartPageObject;
const orderForm = new PlaceOrderForm;

describe('Demoblaze POM', () => {
  let user;

  before(() => {
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    })
  });

  it('', () => {
    //Pick the product to the Cart
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    productPage.addToCart;  
    //Window alert assertion
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added`);
  })
    //Go to the Cart
    homePage.clickOnLink('Cart');
    //product in the Cart assertion
    cy.get('.success').should('contain.text', 'Sony vaio i7');
    //Place the order
    cart.placeOrderBtn.click();
    orderForm.name.type(user.fullName);
    orderForm.country.type(user.country);
    orderForm.city.type(user.city);
    orderForm.creditCard.type(user.creditCard);
    orderForm.month.type(user.month);
    orderForm.year.type(user.year);
    orderForm.purchaseBtn.click();
    //Entered data assertion
    cy.get('.sweet-alert').should('include.text', user.fullName);
    cy.get('.sweet-alert').should('include.text', user.creditCard); 
    //Press OK after purchase
    orderForm.okBtn.click();
  });
});
