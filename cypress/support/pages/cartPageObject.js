import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  cartProduct(productName) {
    cy.get('.table').should('contain', productName);
  }

  orderBtn() {
    cy.contains('.btn', 'Place Order').click();
  }

  addName(name) {
    cy.get('#name').type(name);
  }

  addCountry(country) {
    cy.get('#country').type(country);
  }

  addCity(city) {
    cy.get('#city').type(city);
  }

  addCard(card) {
    cy.get('#card').type(card);
  }

  addMonth(month) {
    cy.get('#month').type(month);
  }

  addYear(year) {
    cy.get('#year').type(year);
  }

  purchaseBtn() {
    cy.contains('.btn', 'Purchase').click();
  }

  successMessage(message, cardName, name) {
    cy.get('.sweet-alert')
      .should('contain', message)
      .and('contain', cardName)
      .and('contain', name);
  }

  okButton() {
    cy.contains('.btn-primary', 'OK').click();
  }
}

export default CartPageObject;
