import PageObject from '../PageObject';
import chai from 'chai';

class CartPageObject extends PageObject {
  url = '/index.html';

assertProductInTheCart(product) {
    cy.get('.success')
      .should('contain', product);
  }   
placeOrder(button) {
    cy.get('.btn-success', button)
      .click();
  }

enterName(userName) {
    cy.get('#name')
      .type(userName, {force: true});
  }
enterCountry(country) {
    cy.get('#country')
    .type(country, {force: true});
  }
enterCity(city){
    cy.get('#city')
    .type(city, {force: true});
  }
enterCreditCard(creditCard){
    cy.get('#card')
    .type(creditCard, {force: true});
  }
enterMonth(month){
    cy.get('#month')
    .type(month, {force: true});
  }
enterYear(year){
    cy.get('#year')
    .type(year, {force: true});
  }
clickToPurchase(){
    cy.contains('.btn', 'Purchase')
      .click();
  }
confirmTheData(creditCard, userName) {
    cy.get('.lead')
      .should('contain', 'Amount: 790 USD')
      .and('contain', `Card Number: ${creditCard}`)
      .and('contain', `Name: ${userName}`)
      .and('contain', 'Date: 7/5/2023' )
 }
    
 clickOnModalWindow() {
    cy.contains('.btn', 'OK').click();
 }

}
export default CartPageObject;
