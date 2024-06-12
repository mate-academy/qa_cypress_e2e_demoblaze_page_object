import PageObject from '../PageObject';

class productPageObject extends PageObject {

  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName)
      .click();
  }

  assertAlert(alertText) {
    cy.on('window:alert', (text) => {
      expect(text).to.equal(alertText);
    })
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }
}



export default productPageObject;
