class CartPage {
    visit() {
      cy.visit('https://www.demoblaze.com/cart.html');
    }
  
    assertProductInCart(productName) {
      cy.get('.success')
        .should('contain.text', productName);
    }
  
    clickOnPlaceOrderButton() {
      cy.contains('button', 'Place Order').click();
    }
  
    fillOrderForm(name, country, city, creditCard, month, year) {
      cy.get('#name').type(name);
      cy.get('#country').type(country);
      cy.get('#city').type(city);
      cy.get('#card').type(creditCard);
      cy.get('#month').type(month);
      cy.get('#year').type(year);
    }
  
    clickOnPurchaseButton() {
      cy.contains('button', 'Purchase').click();
    }
  
    assertOrderDetails(name, creditCard) {
      cy.get('.sweet-alert').should('be.visible');
      cy.get('.sweet-alert').contains(name);
      cy.get('.sweet-alert').contains(creditCard);
    }
  
    clickOkButton() {
      cy.contains('button', 'OK').click();
    }
  }
  
  export default CartPage;
  
  