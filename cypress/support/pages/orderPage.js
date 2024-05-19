class OrderPage {
    fillOrderDetails(details) {
      cy.get('#name').type(details.name);
      cy.get('#country').type(details.country);
      cy.get('#city').type(details.city);
      cy.get('#card').type(details.creditCard);
      cy.get('#month').type(details.month);
      cy.get('#year').type(details.year);
    }
  
    purchase() {
      cy.contains('Purchase').click();
    }
  
    verifyOrderDetails(details) {
      cy.get('.sweet-alert').contains(details.name).should('exist');
      cy.get('.sweet-alert').contains(details.creditCard).should('exist');
    }
  
    confirmOrder() {
      cy.contains('OK').click();
    }
  }
  
  export const orderPage = new OrderPage();
  