import PageObject from '../PageObject';

class CheckoutFlowPageObject extends PageObject {
    url = '/index.html';

    get addToCart() {
        return cy.get('.btn.btn-success.btn-lg');
      }

      get goToCart() {
        return cy.get('#cartur');
      }

      get productInTheCart() {
        return cy.contains('.success', 'Sony vaio i7');
      }

      get placeOrder() {
        return cy.get('.btn.btn-success')
      }
      
      get userName() {
        return cy.get('#name')
      }

      get userCountry() {
        return cy.get('#country')
      }

      get userCity() {
        return cy.get('#city')
      }

      get userCreditCard() {
        return cy.get('#card')
      }

      get userBirthdayMonth() {
        return cy.get('#month')
      }

      get userBirthdayYear() {
        return cy.get('#year')
      }
    
      get purchaseButton() {
        return cy.get('.btn.btn-primary').contains('Purchase')
      }

      get okButton() {
        return cy.get('.confirm.btn.btn-lg.btn-primary').contains('OK')
      }

      assertEnteredData(name, creditCard) {
        cy.get('.lead.text-muted').should('contain', name)
        .and('contain', creditCard);
      }
}

export default CheckoutFlowPageObject;