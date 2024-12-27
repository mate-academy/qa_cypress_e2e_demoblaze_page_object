/* eslint-disable max-len */
import PageObject from '../PageObject';
const purchase = '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary';

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

  clickOnBtnInCart(buttonName) {
    cy.contains('.col-lg-1 > .btn', buttonName)
      .click();
  }

  clickOnBtnOnProductPage(button) {
    cy.contains('.col-sm-12 > .btn', button)
      .click();
  }

  clickOnBtnInOrderForm(button) {
    cy.contains(purchase, button)
      .click();
  }

  clickOnOk() {
    cy.get('.confirm')
      .click();
  }
}
export default HomeAndCataloguePageObject;
