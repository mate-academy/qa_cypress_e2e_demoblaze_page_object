import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  assertProductInCart(productName) {
    cy.contains('.success td', productName)
      .should('be.visible');
  }

  clickOnPlaceOrderBtn() {
    cy.contains('.btn', 'Place Order')
      .click();
  }

  typeName(name) {
    cy.get('#name')
      .type(name);
  }

  typeCountry(country) {
    cy.get('#country')
      .type(country);
  }

  typeCity(city) {
    cy.get('#city')
      .type(city);
  }

  typeCreditCard(card) {
    cy.get('#card')
      .type(card);
  }

  typeMonth(month) {
    cy.get('#month')
      .type(month);
  }

  typeYear(year) {
    cy.get('#year')
      .type(year);
  }

  clickOnPurchaseBtn() {
    cy.contains('.btn', 'Purchase')
      .click();
  }

  assertPurchaseData(data) {
    cy.get('.sweet-alert')
      .should('contain', data.name)
      .and('contain', data.card);
  }

  clickOnOkBtn() {
    cy.contains('.confirm', 'OK')
      .click();
  }
}

export default CartPageObject;
