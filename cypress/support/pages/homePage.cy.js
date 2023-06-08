/// <reference types="cypress" />

class HomePage {
    visit() {
      cy.visit('https://www.demoblaze.com/');
    }
  
    clickOnCategory(categoryName) {
      cy.contains(categoryName).click();
    }
  }
  
  export default HomePage;