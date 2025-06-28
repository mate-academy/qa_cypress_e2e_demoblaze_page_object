import PageObject from '../PageObject';

export class CartPageObject extends PageObject {
  url = '/cart.html';

  get placeOrder() {
    return cy.contains('button', 'Place Order');
  }

  get purchaseBtn() {
    return cy.contains('button', 'Purchase');
  }

  get name() {
    return cy.get('#name');
  }

  get country() {
    return cy.get('#country');
  }

  get city() {
    return cy.get('#city');
  }

  get card() {
    return cy.get('#card');
  }

  get month() {
    return cy.get('#month');
  }

  get year() {
    return cy.get('#year');
  }

  contains(productName) {
    return cy.contains('td', productName).should('exist');
  }

  fillName(name) {
    return this.name.type(name);
  }

  fillCountry(country) {
    return this.country.click().type(country);
  }

  fillCity(city) {
    return this.city.type(city);
  }

  fillCard(card) {
    return this.card.type(card);
  }

  fillMonth(month) {
    return this.month.type(month);
  }

  fillYear(year) {
    return this.year.type(year);
  }

  clickOnPlaceOrder() {
    return this.placeOrder.click();
  }

  purchase() {
    return this.purchaseBtn.click();
  }

  assertPurchase(name, creditCard) {
    cy.contains('h2', 'Thank you for your purchase!')
      .should('exist')
      .as('title');

    cy.get('h2 + p').should('exist').as('purchaseData');
    cy.get('@purchaseData').should('contain.text', `Name: ${name}`);

    cy.get('@purchaseData').should(
      'contain.text',
      `Card Number: ${creditCard}`
    );
  }
}
