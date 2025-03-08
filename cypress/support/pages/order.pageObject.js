import PageObject from '../PageObject';

class OrderPageObject extends PageObject {
  typeName(name) {
    cy.get(`#name`).type(name);
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

  clickPurchase() {
    cy.contains(`button`, `Purchase`).click();
  }

  asserCard(card) {
    cy.get(`.lead.text-muted`)
      .should('contain.text', card);
  }

  asserName(name) {
    cy.get(`.lead.text-muted`)
      .should('contain.text', name);
  }

  clickOK() {
    cy.contains(`button`, `OK`).click();
  }
}

export default OrderPageObject;
