export default class ProductPage {
  clickOnAddToCart() {
    cy.get('.btn-success').click(); // bardziej stabilny selector
    return this;
  }
}
