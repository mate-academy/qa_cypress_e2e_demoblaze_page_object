import PageObject from '../PageObject';

export class ContactFormPageObject extends PageObject {
  url = '/index.html';

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
}

export default ContactFormPageObject;
