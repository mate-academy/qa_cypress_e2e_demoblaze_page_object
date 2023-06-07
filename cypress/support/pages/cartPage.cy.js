/// <reference types="cypress" />

class CartPage {
    clickOnLink(linkText) {
      cy.contains(linkText).click();
    }
  
    verifyProduct(productName) {
      cy.get('.col-lg-8').should('contain', productName);
    }
  }
  
  export default CartPage;
  