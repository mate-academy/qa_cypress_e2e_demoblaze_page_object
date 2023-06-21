import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  confirmTheProduct(productName) {
    cy.get('#tbodyid')
      .should('contain', productName);
  }

  typeName(name) {
    cy.get('#name')
      .type(name, { force: true });
  }

  typeCountry(country) {
    cy.get('#country')
      .type(country, { force: true });
  }

  typeCity(city) {
    cy.get('#city')
      .type(city, { force: true });
  }

  typeCardnumder(cardnumder) {
    cy.get('#card')
      .type(cardnumder, { force: true });
  }

  typeMonth(month) {
    cy.get('#month')
      .type(month, { force: true });
  }

  typeYear(year) {
    cy.get('#year')
      .type(year, { force: true });
  }

  confirmEnteredData(cardNumber, name) {
    cy.get('.lead')
      .should('contain', 'Amount: 790 USD')
      .and('contain', cardNumber)
      .and('contain', name);
  }
}

export default CartPageObject;
