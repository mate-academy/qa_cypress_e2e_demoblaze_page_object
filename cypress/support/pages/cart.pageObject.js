import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  assertProductInCart(prodName) {
    cy.get('tbody tr td:nth-child(2)')
      .should('have.text', prodName + '\n');
  }

  placeOrder() {
    cy.contains('button', 'Place Order')
      .click();
  }

  fillTheForm(name, country, city, cardNo, month, year) {
    cy.get('input#name').type(name);
    cy.get('input#country').type(country);
    cy.get('input#city').type(city);
    cy.get('input#card').type(cardNo);
    cy.get('input#month').type(month);
    cy.get('input#year').type(year);
    cy.contains('button', 'Purchase')
      .click();
  }

  assertPurcaseInfo(name, cardNo) {
    cy.get('.sweet-alert p.text-muted')
      .should('contain.text', 'Name: ' + name);
  }

  closePurchaseModal() {
    cy.get('button.confirm')
      .click();
  }
}

export default CartPageObject;
