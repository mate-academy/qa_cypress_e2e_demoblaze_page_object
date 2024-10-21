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
    cy.contains('Add to cart').click();
  }

  assertAlert(expectedMessage) {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal(expectedMessage);
    });
  }

  clickOnCart() {
    cy.get('#cartur').click();
  }

  placeOrder() {
    cy.contains('Place Order').click();
  }

  fillOrderForm(name, country, city, card, month, year) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  purchase() {
    cy.contains('Purchase').click();
  }

  get successModal() {
    return cy.get('.sweet-alert');
  }

  assertSuccessModal() {
    return this.successModal.should('be.visible');
  }

  confirmOk() {
    cy.contains('OK').click(); // Клік по кнопці "OK" у модальному вікні
  }
}

export default HomeAndCataloguePageObject;
