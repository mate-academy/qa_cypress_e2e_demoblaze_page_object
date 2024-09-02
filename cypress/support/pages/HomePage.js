class HomePage {
    visit() {
      cy.visit('https://www.demoblaze.com/');
    }
  
    clickOnCategory(category) {
      cy.contains('a', category).click();
    }
  
    goToCart() {
      cy.contains('a', 'Cart').click();
    }
  }
  
  export default HomePage;
  
  
  