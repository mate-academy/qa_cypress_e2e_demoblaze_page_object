/// <reference types="cypress" />

class PlaceOrderPage {
    fillOrderForm(testData) {
      cy.get('#name').type(testData.name);
      cy.get('#country').type(testData.country);
      cy.get('#city').type(testData.city);
      cy.get('#card').type(testData.cardNumber);
      cy.get('#month').type(testData.month);
      cy.get('#year').type(testData.year.toString());
    }
  
    clickPurchase() {
      cy.contains('Purchase').click();
    }
  
    verifySuccessMessage(message) {
      cy.get('.sweet-alert').should('contain', message);
    }
  
    verifyOrderDetails(name, cardNumber) {
        cy.get('.lead')
        .should('contain.text', name)
        .should('contain.text', cardNumber);
    
    }
  }
  
  export default PlaceOrderPage;