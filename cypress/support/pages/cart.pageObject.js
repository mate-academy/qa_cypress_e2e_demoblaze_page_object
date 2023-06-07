import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  assertNameOfProduct(productName) {
    cy.get('#tbodyid')
      .should('contain', productName);
  }

  clickOnOrderButton(button) {
    cy.contains('.btn', button)
      .click();
  }

  fillNameForOrder(name){
    cy.get('#name')
      .type(name);
  }

  fillCountryForOrder(country){
    cy.get('#country')
      .type(country);
  }

  fillCityForOrder(city){
    cy.get('#city')
      .type(city);
  }

  fillCardForOrder(card){
    cy.get('#card')
      .type(card);
  }

  fillMonthForOrder(month){
    cy.get('#month')
      .type(month);
  }

  fillYearForOrder(year){
    cy.get('#year')
      .type(year);
  }

  clickOnPurchaseButton(button) {
    cy.contains('.btn', button)
      .click();
  }

  assertDataForOrder(name, card) {
    cy.get('.sweet-alert')
      .should('contain', name)
      .and('contain', card);
  }

  clickOnConfirmButton(button) {
    cy.contains('.confirm', button)
      .click();
  }
}

export default CartPageObject;