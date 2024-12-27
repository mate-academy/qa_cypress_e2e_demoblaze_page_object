import PlaceOrderFormPageObject from '../support/pages/orderForm.pageObject';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
// eslint-disable-next-line max-len
import ConfirmationFormPageObject from '../support/pages/confirmForm.pageObject';
import CartFormPageObject from '../support/pages/cartForm.pageObject';

const orderForm = new PlaceOrderFormPageObject();
const homePage = new HomeAndCataloguePageObject();
const confirmWindowValue = new ConfirmationFormPageObject();
const cartWindow = new CartFormPageObject();

/// <reference types='cypress' />

describe('The order', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
    homePage.visit();
  });

  it('should be placed by purchase the form', () => {
    const confirmationMessage = 'Thank you for your purchase!';
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');
    homePage.clickOnBtnOnProductPage('Add to cart');
    orderForm.handleConfirmWindow();
    homePage.clickOnLink('Cart');
    cartWindow.table.should('contain', 'Sony vaio i7');
    homePage.clickOnBtnInCart('Place Order');
    orderForm.typeName(user.username);
    orderForm.typeCountry(user.country);
    orderForm.typeCity(user.city);
    orderForm.typeCard(user.card);
    orderForm.typeMonth(user.month);
    orderForm.typeYear(user.year);
    homePage.clickOnBtnInOrderForm('Purchase');
    confirmWindowValue.confirmWindow.should('exist');
    confirmWindowValue.customerName
      .should('contain', user.username);
    confirmWindowValue.confirmMsg
      .should('contain', confirmationMessage);
    confirmWindowValue.customerCard
      .should('contain', user.card);
    confirmWindowValue.orderId
      .should('contain', 'Id');
    homePage.clickOnOk();
  });
});
