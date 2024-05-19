class HomePage {
    visit() {
      cy.visit('https://www.demoblaze.com/');
    }
  
    clickLaptops() {
      cy.contains('Laptops').click();
    }
  
    selectProduct(productName) {
      cy.contains(productName).click();
    }
  }
  
  export const homePage = new HomePage();
  