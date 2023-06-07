import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  confirmTheProduct(productName) {
    cy.get('#tbodyid').should('contain', productName);
  }

  clickOnOrder() {
    cy.contains('.btn', 'Place Order').click();
  }

  typeName(name) {
    cy.get('#name').type(name, { force: true });
  }

  typeCountry(country) {
    cy.get('#country').type(country, { force: true });
  }

  typeCity(city) {
    cy.get('#city').type(city, { force: true });
  }

  typeCardnumder(cardnumder) {
    cy.get('#card').type(cardnumder, { force: true });
  }

  typeMonth(month) {
    cy.get('#month').type(month, { force: true });
  }

  typeYear(year) {
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
      .and('contain', 'Date: 7/5/2023');
  }

  clickOnOkModalWindow() {
    cy.contains('.btn', 'OK').click();
  }
}

export default CartPageObject;
