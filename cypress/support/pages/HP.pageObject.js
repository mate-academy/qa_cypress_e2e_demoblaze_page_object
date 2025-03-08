import PageObject from '../PageObject';

class HomePage extends PageObject {
  url = '/index.html';

  visit() {
    cy.visit('/index.html');
  }

  clickLaptops() {
    cy.get('.list-group-item').contains('Laptops').click();
  }
}

export default HomePage;
