class ProductPage {
  clickLaptopsCategory() {
    cy.contains('Laptops').click();
  }

  selectProduct(productName) {
    cy.contains(productName).click();
  }

  addToCart() {
    cy.contains('Add to cart').click();
  }

  goToCart() {
    cy.get('#cartur').click();
  }

  fillOrderDetails(name, country, city, card, month, year) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  confirmPurchase() {
    cy.contains('Purchase').click();
  }

  verifyOrderDetails(name, amount, cardNumber) {
    cy.get('.lead').should('contain.text', name);
    cy.get('.lead').should('contain.text', amount);
    cy.get('.lead').should('contain.text', cardNumber);
  }
}

export default ProductPage;
