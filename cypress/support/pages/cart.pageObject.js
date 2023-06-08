import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  confirmTheProduct(productName) {
    cy.get('#tbodyid')
      .should('contain', productName);
  }

  clickOnOrder() {
    cy.contains('.btn', 'Place Order')
      .click();
  }

  typeName(name) {
    cy.get('#name')
      .type(name, { force: true });
  }

  typeCountry(country) {
    cy.get('#country')
      .type(country, '{enter}');
  }

  typeCity(city) {
    cy.get('#city')
      .type(city, '{enter}');
  }

  typeCardnumber(cardnumber) {
    cy.get('#card')
      .type(cardnumber, '{enter}');
  }

  typeMonth(month) {
    cy.get('#month')
      .type(month, '{enter}');
  }

  typeYear(year) {
    cy.get('#year')
      .type(year, '{enter}');
  }

  clickOnPurchase() {
    cy.contains('.btn', 'Purchase')
      .click();
  }

  confirmEnteredData(cardNumber, name) {
    cy.get('.lead')
      .should('contain', 'Amount: 790 USD')
      .and('contain', cardNumber)
      .and('contain', name);
  }

  clickOnOkModalWindow() {
    cy.contains('.btn', 'OK')
      .click();
  }
}

export default CartPageObject;