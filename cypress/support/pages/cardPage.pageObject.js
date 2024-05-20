import PageObject from '../PageObject';

class CardPage extends PageObject {
  url = '/cart.html';

  get poductsTable() {
    return cy.get('.success');
  }
}

export default CardPage;
