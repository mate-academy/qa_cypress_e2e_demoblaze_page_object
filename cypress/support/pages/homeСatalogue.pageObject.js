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


  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName)
      .click();
  }

  typeInField(fieldId, text) {
    cy.get(`#${fieldId}`)
      .type(text);
  }

  assertText(text) {
    cy.contains('.sweet-alert', text).should('contain', text);
  }

  assertPhone(text) {
    cy.contains('.success', text).should('contain', text);
  }

  assertAlert(alertText) {
    cy.on('window:alert', (text) => {
      expect(text).to.equal(alertText);
    })
  }
}



export default HomeAndCataloguePageObject;
