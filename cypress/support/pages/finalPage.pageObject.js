import PageObject from '../PageObject';

class FinalPageObject extends PageObject {
  url = '/cart.html';

  clickOk() {
    cy.contains('OK').click();
  }
}

export default FinalPageObject;
