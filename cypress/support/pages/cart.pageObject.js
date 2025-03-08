/// <reference types='cypress' />

class CartpageObject {
    elements = {
      tableRowWithProduct: () => cy.get('.success'),
      placeOrderButton: () => cy.contains('.btn', 'Place Order'),
      nameInput: () => cy.get('#name'),
      countryInput: () => cy.get('#country'),
      cityInput: () => cy.get('#city'),
      cardInput: () => cy.get('#card'),
      monthInput: () => cy.get('#month'),
      yearInput: () => cy.get('#year'),
      purchaseButton: () => cy.contains('.btn', 'Purchase'),
      popUpMessage: () => cy.get('.sweet-alert'),
      okButton: () => cy.get('.confirm')
    };
  
    assertProductInCart(productName) {
      this.elements.tableRowWithProduct().contains(productName);
    }
  
    clickOnPlaceOrder() {
      this.elements.placeOrderButton().click();
    }
  
    typeName(firstName) {
      this.elements.nameInput().type(firstName);
    }
  
    typeCountry(country) {
      this.elements.countryInput().type(country);
    }
  
    typeCity(city) {
      this.elements.cityInput().type(city);
    }
  
    typeCreditCard(card) {
      this.elements.cardInput().type(card);
    }
  
    typeMonth(month) {
      this.elements.monthInput().type(month);
    }
  
    typeYear(year) {
      this.elements.yearInput().type(year);
    }
  
    clickOnPurchase() {
      this.elements.purchaseButton().click();
    }
  
    assertPopUpMessage() {
      this.elements.popUpMessage().should('be.visible');
    }
  
    clickOnOk() {
      this.elements.okButton().click();
    }
  }
  
  export default CartpageObject;