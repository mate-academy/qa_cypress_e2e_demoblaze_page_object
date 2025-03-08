class ProductPage {
    addToCart() {
      cy.contains('Add to cart').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Product added');
      });
    }
  }
  
  export const productPage = new ProductPage();
  