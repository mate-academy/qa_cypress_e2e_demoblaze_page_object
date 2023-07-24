import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  confirmTheProduct(productName) {
    cy.get('#tbodyid').should('contain', productName);
  }

  clickOnOrder() {
    cy.contains('.btn', 'Place Order').click();
  }

  typeName(name) {
    // eslint-disable-next-line cypress/no-force
    cy.get('#name').type(name, { force: true });
  }

  typeCountry(country) {
    // eslint-disable-next-line cypress/no-force
    cy.get('#country').type(country, { force: true });
  }

  typeCity(city) {
    // eslint-disable-next-line cypress/no-force
    cy.get('#city').type(city, { force: true });
  }

  typeCardnumder(cardnumder) {
    // eslint-disable-next-line cypress/no-force
    cy.get('#card').type(cardnumder, { force: true });
  }

  typeMonth(month) {
    // eslint-disable-next-line cypress/no-force
    cy.get('#month').type(month, { force: true });
  }

  typeYear(year) {
    // eslint-disable-next-line cypress/no-force
    cy.get('#year').type(year, { force: true });
  }

  clickOnPurchase() {
    cy.contains('.btn', 'Purchase').click();
  }

  confirmEnteredData(cardNumber, name) {
    cy.get('.lead')
      .should('contain', 'Amount: 790 USD')
      .and('contain', `Card Number: ${cardNumber}`)
      .and('contain', `Name: ${name}`)
      .and('contain', 'Date: 24/6/2023');
  }

  clickOnOkModalWindow() {
    cy.contains('.btn', 'OK')
      .click();
  }
}

export default CartPageObject;
