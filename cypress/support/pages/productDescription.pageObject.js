import PageObject from '../PageObject';

class productDescriptionPageObject extends PageObject {
  url = '/prod.html?idp_=9';

  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName).click();
  }
  
  checkAlertMessage(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.equal(alertMessage);
  })
}
clickOnLink(linkName) {
  cy.contains('.nav-link', linkName)
    .click();
}
}
export default productDescriptionPageObject;