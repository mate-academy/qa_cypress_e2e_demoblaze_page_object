import PageObject from '../PageObject';

class ContactFormPageObject extends PageObject {
  get orderAlert() {
    return cy.get('.sweet-alert');
  }

  fillOrderForm(name, country, city, card, month, year) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  clickPurchaseButton() {
    cy.contains('Purchase').click();
  }

  assertEnteredData(message, name) {
    this.orderAlert.should('contain', message);
    this.orderAlert.should('contain', name);
  }

  clickOkButton() {
    cy.contains('OK').click();
  }
}

export default ContactFormPageObject;
