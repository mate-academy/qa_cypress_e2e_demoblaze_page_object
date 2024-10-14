import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName).click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName).click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product).click();
  }

  addToCart() {
    cy.contains('Add to cart').click();
  }

  placeOrder() {
    cy.contains('Place Order').click();
  }

  clickOnCart() {
    cy.contains('Cart').click();

  }
  fillOrderForm(name, country, city, card, month, year) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }


  Purchase() {
    cy.contains('Purchase').click();

  }
  assertModalContent(name, card) {
    cy.get('.sweet-alert').should('contain', name);
    cy.get('.sweet-alert').should('contain', card);
  }
  ConfirmOk() {
    cy.contains('OK').click();

  }
}

export default HomeAndCataloguePageObject;
