import PageObject from '../PageObject';

class PurchaseFormPageObject extends PageObject {
  url = '/index.html';

  fillName(name) {
    cy.get('#name').type(name);
  }

  fillCountry(country) {
    cy.get('#country').type(country);
  }

  fillCity(city) {
    cy.get('#city').type(city);
  }

  fillCreditCard(card) {
    cy.get('#card').type(card);
  }

  fillMonth(month) {
    cy.get('#month').type(month);
  }

  fillYear(year) {
    cy.get('#year').type(year);
  }
}

export default PurchaseFormPageObject;
