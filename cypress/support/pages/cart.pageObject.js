
import PageObject from '../PageObject';

export class CartPageObject extends PageObject {
  verifyItemInCart(itemName) {
    cy.contains(itemName)
      .should('exist');
  }

  clickOnButton(buttonText) {
    cy.contains(buttonText)
      .should('be.visible')
      .click();
  }

  fillOrderForm(name, country, city, card, month, year) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  verifyEnteredDataOnModalWindow(name, card) {
    cy.get('.sweet-alert').should('contain', name);
    cy.get('.sweet-alert').should('contain', card);
  }
}
