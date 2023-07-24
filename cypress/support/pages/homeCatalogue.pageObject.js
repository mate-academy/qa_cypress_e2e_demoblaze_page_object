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

  clickOnButton(button) {
    cy.contains('.btn', button)
      .click();
  }

  goToCart(link) {
    cy.get(':nth-child(4) > .nav-link')
      .click();
  }

  clickPlaceOrder(button) {
    cy.get('.col-lg-1 > .btn')
      .click();
  }

  fillOrderForm(attribute, fieldName) {
    cy.get(`#${attribute}`)
      .type(fieldName);
  }

  clickOk() {
    cy.get('.confirm')
      .click();
  }
}

export default HomeAndCataloguePageObject;
