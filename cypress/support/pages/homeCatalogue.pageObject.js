import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }

  addToCart() {
    cy.get('[onclick="addToCart(9)"]').click();
  }

  assertInCart() {
    cy.findById('tbodyid').should('contain', 'Sony vaio i7');
  }

  placeOrder() {
    cy.contains('Place Order').click();
  }

  fillOrderForm(name, country, city, creditCard, month, year) {
    cy.findById('name').type(name);
    cy.findById('country').type(country);
    cy.findById('city').type(city);
    cy.findById('card').type(creditCard);
    cy.findById('month').type(month);
    cy.findById('year').type(year);
  }

  purchaseOrder() {
    cy.get('[onclick="purchaseOrder()"]').click();
  }

  get successModal() {
    return cy.get('.sweet-alert');
  }

  assertModal() {
    return this.successModal.should('be.visible')
      .and('contain', 'Thank you for your purchase!');
  }

  confirmBtn() {
    cy.contains('OK').click();
  }
}

export default HomeAndCataloguePageObject;
