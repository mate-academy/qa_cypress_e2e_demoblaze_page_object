import PageObject from '../PageObject';

class CartFormPageObject extends PageObject {
  url = '/cart.html';

  get table() {
    return cy.get('.table-responsive');
  }
}

export default CartFormPageObject;
