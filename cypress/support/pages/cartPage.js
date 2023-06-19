import PageObject from '../PageObject';

class cartPage extends PageObject {
  url = '/index.html';

  clickOnBTNaddToCart(button) {
    cy.contains('.btn-success', button)
      .click();
  }
  
  productIsInTheCart(product) {
    cy.contains('.success', product)
      .should('contain', product);
  }

  clickOnPlaceOrder(button) {
    cy.contains('.btn-success', button)
      .click();
  }

  nameField(name) {
    cy.get('#name')
      .type(name);
  }

  countryField(country) {
    cy.get('#country')
      .type(country);
  }

  cityField(city) {
    cy.get('#city')
      .type(city);
  }

  creditCardField(card) {
    cy.get('#card')
      .type(card);
  }

  monthField(month) {
    cy.get('#month')
      .type(month);
  }

  yearField(year) {
    cy.get('#year')
      .type(year);
  }

  clickOnPurchase(button) {
    cy.contains('.btn-primary', button)
      .click();
  }

  enteredDataSsShownOnModal(card, name ) {
    cy.get('.lead')
      .should('contain', 'Amount: 790 USD')
      .and('contain', card)
      .and('contain', name)
      .and('contain', 'Date: 7/5/2023')
  }

  clickOnOk(button) {
    cy.contains('.btn', button)
      .click();
  }
}

export default cartPage;
