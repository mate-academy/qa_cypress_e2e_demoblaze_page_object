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

  clickOnBtnAddToCart(buttonText = 'Add to cart') {
    cy.contains('.btn', buttonText).click();
  }

  clickOnCart(cart) {
    cy.contains('.nav-link', cart)
      .click();
  }

  itemInCart(item) {
    cy.get('#tbodyid')
      .contains(item)
      .should('be.visible');
  }

  clickOnBtnPlaceOrder(buttonText = 'Place Order') {
    cy.contains('.btn', buttonText).click();
  }

  fillName(name) {
    cy.get('#name')
      .type(name);
  }

  fillCountry(country) {
    cy.get('#country')
      .type(country);
  }

  fillCity(city) {
    cy.get('#city')
      .type(city);
  }

  fillnumber(number) {
    cy.get('#card')
      .type(number);
  }

  fillexpirationMonth(expirationMonth) {
    cy.get('#month')
      .type(expirationMonth);
  }

  fillexpirationYear(expirationYear) {
    cy.get('#year')
      .type(expirationYear);
  }

  clickOnBtnPurchase(buttonText = 'Purchase') {
    cy.contains('.btn', buttonText).click();
  }

  modalWindow(number, name) {
    cy.get('.lead')
      .should('be.visible')
      .contains(number)
      .should('include.text', name);
  }

  clickOnBtnOk(buttonText = 'OK') {
    cy.contains('.confirm', buttonText).click();
  }
}

export default HomeAndCataloguePageObject;
