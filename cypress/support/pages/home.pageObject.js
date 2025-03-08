import PageObject from '../PageObject';

class HomePageObject extends PageObject {
  url = '/index.html';

  get productTitle() {
    return cy.get('td');
  }

  get placeOrderBtn() {
    return cy.contains('.btn', 'Place Order');
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }
}

export default HomePageObject;