import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  cartProduct(productName) {
    cy.get('.table')
      .should('contain', productName);
  }

  placeOrder() {
    cy.contains('.btn', 'Place Order').click();
  }

  typeName(name) {
    cy.get('#name').type(name);
  }

  typeCountry(country) {
    cy.get('#country').type(country);
  }

  typeCity(city) {
    cy.get('#city').type(city);
  }

  typeCard(card) {
    cy.get('#card').type(card);
  }

  typeMonth(month) {
    cy.get('#month').type(month);
  }

  typeYear(year) {
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
