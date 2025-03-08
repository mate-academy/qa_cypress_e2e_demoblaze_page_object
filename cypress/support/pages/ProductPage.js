class ProductPage {
    selectProduct(productName) {
      cy.contains('.hrefch', productName).click();
    }
  
    addToCart() {
      cy.contains('a', 'Add to cart').click();
    }
  }
  
  export default ProductPage;
  
  
  