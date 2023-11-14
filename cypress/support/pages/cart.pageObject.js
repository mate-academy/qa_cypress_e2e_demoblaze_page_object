import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  clickPlaceOrderButton() {
    cy.get('[data-target="#orderModal"]')
      .click();
  };
}

export default CartPageObject;
