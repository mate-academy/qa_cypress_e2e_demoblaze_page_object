import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/index.html';

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

  successMessage() {
    cy.get('.sweet-alert')
      .should('contain', 'Thank you for your purchase!')
      .and('contain', '471828930012934')
      .and('contain', 'Danylo');
  }

  okButton() {
    cy.contains('.btn-primary', 'OK').click();
  }
}

export default CartPageObject;
