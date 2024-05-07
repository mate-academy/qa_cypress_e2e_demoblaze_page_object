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

  assertAlertWindow(message) {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('windowAlert');
      cy.get('@windowAlert').should('have.been.calledWith', message);
    });
  }
}

export default HomeAndCataloguePageObject;
