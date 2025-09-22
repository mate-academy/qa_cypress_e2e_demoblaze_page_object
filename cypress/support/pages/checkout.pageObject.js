export default class CheckoutPage {
  fillOrderForm(name, country, city, creditCard, month, year) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(creditCard);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
    return this;
  }

  purchase() {
    cy.contains('button', 'Purchase').click();
    return this;
  }

  closeModal() {
    cy.contains('button', 'OK').click();
    return this;
  }
}
