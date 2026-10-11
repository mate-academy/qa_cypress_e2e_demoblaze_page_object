import PageObject from '../PageObject';

class PlaceOrderPageObject extends PageObject {
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

  clickOnPurchaseBtn() {
    cy.contains('button', 'Purchase').click();
  }

  assertPurchaseDetails(name, card) {
    cy.get('.sweet-alert')
      .should('contain', 'Thank you for your purchase!')
      .and('contain', name)
      .and('contain', card);
  }

  clickOnOkBtn() {
    cy.get('.sweet-alert button').contains('OK').click();
  }
}

export default PlaceOrderPageObject;
