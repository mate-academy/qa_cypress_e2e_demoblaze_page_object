import PageObject from '../PageObject';

class productDescription extends PageObject {
  url = '/prod.html?idp_=9';

  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName).click();
  }
  
  checkAlertMessage(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.equal(alertMessage).should('exist');
  })
}
clickOnLink(linkName) {
  cy.contains('.nav-link', linkName)
    .click();
}
assertAllert(alertMessage) {
  cy.on('window:alert', (alert) => {
    expect(alert).to.eq(alertMessage);
  });
}
}
export default productDescription;