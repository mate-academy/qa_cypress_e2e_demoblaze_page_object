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
    cy.get('.hrefch').contains(product).click();
  }

  clickOnButton(buttonText) {
    cy.contains('.btn.btn', buttonText).click();
  }

  alertAssert(assertText) {
    cy.on('window:alert', (str) => {
      expect(str).to.equal(assertText);
    }).then(() => {
      cy.get('body').type('{enter}');
    });
  }

  productAssert(productName) {
    cy.get('.table.table-bordered.table-hover.table-striped')
      .should('contain', productName);
  }

  orderAssert(orderText) {
    cy.on('window:alert', (str) => {
      expect(str).to.equal(orderText);
    }).then(() => {
      cy.get('body').type('{enter}');
    });
  }
}

export default HomeAndCataloguePageObject;
