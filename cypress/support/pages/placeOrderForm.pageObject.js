
import PageObject from "../PageObject";

class PlaceOrderForm extends PageObject {
    url = '/cart.html';


    clickOnPlaceOrder(Order) {
        cy.contains('[data-target="#orderModal"]', 'Place Order').click();
          
      }

      get fieldName(){
        return cy.get('#name');
      }

      get fieldCountry(){
        return cy.get('#country');
      }

      get fieldCity(){
        return cy.get('#city');
      }

      get fieldCard(){
        return cy.get('#card');
      }

      get fieldMonth(){
        return cy.get('#month');
      }

      get fieldYear(){
        return cy.get('#year');
      }

       clickOnPurchase(){
         cy.contains('.btn-primary', 'Purchase').click({force:true});
      }

      popUpIsVisible(){
        cy.get('.sa-placeholder').should('be.visible');
      }

      popUpContainText(){
        cy.contains('h2', 'Thank you for your purchase!').should('contain.text', 'Thank you for your purchase!');
        
      }

      get nameIsDisplayedOnPopUp(){
        return cy.contains('p', 'Name:')
      }

      get numberOfCardIsDisplayedOnPopUp(){
        return cy.contains('p', 'Card Number:')
      }

      get clickOnOk(){
        return cy.get('[style="display: inline-block;"]')
      }
};


export default PlaceOrderForm;
