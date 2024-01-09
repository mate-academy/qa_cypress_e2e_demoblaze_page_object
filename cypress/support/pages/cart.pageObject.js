import PageObject from '../PageObject';

class CartPageObject extends PageObject {
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

  fillNameField(name) {
    cy.get('#name')
      .type(name);
  }

  fillCountryField(country) {
    cy.get('#country')
      .type(country);
  }

  fillCityField(city) {
    cy.get('#city')
      .type(city);
  }

  fillCreditCardField(card) {
    cy.get('#card')
      .type(card);
  }

  fillMonthField(month) {
    cy.get('#month')
      .type(month);
  }

  fillYearField(year) {
    cy.get('#year')
      .type(year);
  }

  clickOnPurchase(button) {
    cy.contains('.btn-primary', button)
      .click();
  }

  enteredDataSsShownOnModal(card, name) {
    cy.get('.lead')
      .should('contain', 'Amount: 790 USD')
      .and('contain', card)
      .and('contain', name)
      .and('contain', 'Date: 9/0/2024');
  }

  clickOnOk(button) {
    cy.contains('.btn', button)
      .click();
  }
}

export default CartPageObject;
