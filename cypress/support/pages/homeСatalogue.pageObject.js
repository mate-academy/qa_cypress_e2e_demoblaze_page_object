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

  assertProductInCart(productName) {
    cy.get('.success')
      .should('contain', productName);
  }

  clickOnButton(button) {
    cy.contains('.btn', button)
      .click();
  }

  fillField(id, field) {
    cy.get(`#${id}`).type(field);
  }

  waitTime(time) {
    cy.wait(time);
  }

  assertSuccess(message, cardNumber, name) {
    cy.get('.sweet-alert')
      .should('contain', message)
      .and('contain', cardNumber)
      .and('contain', name);
  }
}

export default HomeAndCataloguePageObject;
