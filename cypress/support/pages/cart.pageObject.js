import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/index.html';

  assertInCart(product) {
    cy.get('#tbodyid')
      .should('contain', product);
  }

  clickOnButton(btnName) {
    cy.contains('.btn', btnName)
      .click();
  }

  fillInForm(username, country, city, card, month, year) {
    cy.get('#name')
      .click()
      .type(username);
    cy.get('#country')
      .type(country);
    cy.get('#city')
      .type(city);
    cy.get('#card')
      .type(card);
    cy.get('#month')
      .type(month);
    cy.get('#year')
      .type(year);
    cy.contains('.btn', 'Purchase')
      .click();
  }

  successAlert(message, card, username) {
    cy.get('.sweet-alert')
      .should('contain', message)
      .and('contain', card)
      .and('contain', username);
  }

  clickOnConfirmButton(btnName) {
    cy.contains('.confirm', btnName)
      .click();
  }
}

export default CartPageObject;
