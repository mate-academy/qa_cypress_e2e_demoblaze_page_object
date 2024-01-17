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

  addToCart(button) {
    cy.contains('.col-sm-12 > .btn', button)
      .click();
  }

  cartMenu(menuItem) {
    cy.contains('#cartur', menuItem)
      .click();
  }

  placeOrder(Item) {
    cy.contains('.col-lg-1 > .btn', Item)
      .click();
  }

  click(zItem) {
    // eslint-disable-next-line max-len
    cy.contains('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary', zItem)
      .click();
  }

  clickOk(yItem) {
    // eslint-disable-next-line max-len
    cy.contains('.confirm', yItem)
      .click();
  }

  typeName(argument) {
    cy.get('#name')
      .type(argument);
  }

  typeCountry(argument1) {
    cy.get('#country')
      .type(argument1);
  }

  typeCity(argument2) {
    cy.get('#city')
      .type(argument2);
  }

  typeCard(argument3) {
    cy.get('#card')
      .type(argument3);
  }

  typeMonth(argument4) {
    cy.get('#month')
      .type(argument4);
  }

  typeYear(argument5) {
    cy.get('#year')
      .type(argument5);
  }
}
