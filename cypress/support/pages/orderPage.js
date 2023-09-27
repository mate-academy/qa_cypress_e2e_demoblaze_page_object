class OrderPage {
    fillOrderForm(name, country, city, creditCard, month, year) {
      cy.get('#name').type(name);
      cy.get('#country').type(country);
      cy.get('#city').type(city);
      cy.get('#card').type(creditCard);
      cy.get('#month').type(month);
      cy.get('#year').type(year);
    }

    clickPurchase() {
      cy.contains('Purchase').click();
    }

    assertOrderDetails(orderSuccesMasage, name, creditCard) {
      cy.get('.sweet-alert').should('contain.text', orderSuccesMasage)
      cy.get('#name').should('have.value', name);
      cy.get('#card').should('have.value', creditCard);
    }

    clickOK() {
      cy.contains('OK').click();
    }
  }

  export default new OrderPage();
