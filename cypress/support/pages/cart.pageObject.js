import PageObject from '../PageObject';

class cartPageObject extends PageObject {

  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName)
      .click();
  }

  typeInField(fieldId, text) {
    cy.get(`#${fieldId}`)
      .type(text);
  }

  assertPhone(text) {
    cy.contains('.success', text).should('contain', text);
  }

  assertText(text) {
    cy.contains('.sweet-alert', text).should('contain', text);
  }
}



export default cartPageObject;
