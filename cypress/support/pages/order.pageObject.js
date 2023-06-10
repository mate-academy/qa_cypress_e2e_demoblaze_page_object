import PageObject from '../PageObject';

class OrderPageObject extends PageObject {
  fillName(name) {
    cy.get('#name')
      .type(name);
  }

  fillCountry(country) {
    cy.get('#country')
      .type(country);
  }

  fillCity(city) {
    cy.get('#city')
      .type(city);
  }

  fillCard(card) {
    cy.get('#card')
      .type(card);
  }

  fillMonth(month) {
    cy.get('#month')
      .type(month);
  }

  fillYear(year) {
    cy.get('#year')
      .type(year);
  }

  clickPurchase() {
    cy.contains('Purchase')
      .click();
  }

  get successModal() {
    return cy.get('.sweet-alert');
  }

  assertSuccessModal(data) {
    this.successModal
      .should('contain', data);
  }

  get successModalOkBtn() {
    return cy.contains('.btn', 'OK');
  }

  clickOnModalOkBtn() {
    this.successModalOkBtn.click();
  }
}

export default OrderPageObject;
