import PageObject from "../PageObject"
import faker from 'faker';
import ContactFormPageObject from "./contactForm.pageObject";

export class CheckoutPageObject extends PageObject {
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

export default CheckoutPageObject;
