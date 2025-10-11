import PageObject from '../PageObject';

class PlaceOrderFormPageObject extends PageObject {
  url = '/index.html';

  typeName(name) {
    cy.get('#name').type(name);
  }

  typeCountry(country) {
    cy.get('#country').type(country);
  }

  typeCity(city) {
    cy.get('#city').type(city);
  }

  typeCreditCard(creditCard) {
    cy.get('#card').type(creditCard);
  }

  typeMonth(month) {
    cy.get('#month').type(month);
  }

  typeYear(year) {
    cy.get('#year').type(year);
  }
}

export default PlaceOrderFormPageObject;
