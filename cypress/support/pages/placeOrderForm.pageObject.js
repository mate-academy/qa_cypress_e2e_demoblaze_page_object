
import PageObject from "../PageObject";

class PlaceOrderForm extends PageObject {
    url = '/cart.html';


    clickOnPlaceOrder(placeOrderBtn) {
        cy.contains('[data-target="#orderModal"]', placeOrderBtn).click();
          
      }

       typeFieldName(name){
      cy.get('#name').type(name);
      }

      typeFieldCountry(country){
        cy.get('#country').type(country);
      }

      typeFieldCity(city){
        cy.get('#city').type(city);
      }

      typeFieldCard(card){
        cy.get('#card').type(card);
      }

      typeFieldMonth(month){
        cy.get('#month').type(month);
      }

      typeFieldYear(year){
        cy.get('#year').type(year);
      }

       clickOnPurchase(){
         cy.contains('.btn-primary', 'Purchase').click({force:true});
      }

      get popUpIsVisible(){
        return cy.get('.sa-placeholder').should('be.visible');
      }

      popUpContainText(textInPopUp){
        cy.contains('h2', textInPopUp).should('contain.text', textInPopUp)
        
      }

      nameIsDisplayedOnPopUp(nameExistInField){
        return cy.contains('p', nameExistInField).should('contain', nameExistInField);
      }

      numberOfCardIsDisplayedOnPopUp(cardExistOnPopUp){
        return cy.contains('p', cardExistOnPopUp).should('contain', cardExistOnPopUp);
      }

      get clickOnOk(){
        return cy.get('[style="display: inline-block;"]').click({force: true});
      }



     


};

export default PlaceOrderForm;
