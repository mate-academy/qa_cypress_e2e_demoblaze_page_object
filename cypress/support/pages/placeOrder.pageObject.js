import PageObject from '../PageObject';

class placeOrder extends PageObject {
  url = '/cart.html';

  assertItemName() {
    cy.contains('#tbodyid', 'Sony vaio i7')
      .should('be.visible');
  }

  assertItemPrice() {
    cy.contains('#tbodyid', '790')
      .should('be.visible');
  }

  clickPlaceOrder() {
    cy.contains('.btn', 'Place Order').click();
  }

  fillName(username) {
    cy.get('#name').type(username);
  }

  fillCountry(country) {
    cy.get('#country').type(country);
  }

  fillCity(city) {
    cy.get('#city').type(city);
  }

  fillCreditCard(cardnumber) {
    cy.get('#card').type(cardnumber);
  }

  fillMonth(month) {
    cy.get('#month').type(month);
  }

  fillYear(year) {
    cy.get('#year').type(year);
  }

  clickPurchaseBtn() {
    cy.contains('.btn', 'Purchase').click();
  }

  assertOrderAmount(value) {
    cy.contains('.lead.text-muted', value)
      .should('be.visible');
  }

  assertOrderName(name) {
    cy.contains('.lead.text-muted', name)
      .should('be.visible');
  }

  assertOrderCreditCard(cardnumber) {
    cy.contains('.lead.text-muted', cardnumber)
      .should('be.visible');
  }

  clickOkBtn() {
    cy.contains('.btn', 'OK').click();
  }
}

export default placeOrder;