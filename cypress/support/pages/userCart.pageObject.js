import PageObject from '../PageObject';

class UserCartPageObject extends PageObject {
  url = '/index.html/cart';

  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName)
      .click();
  }
}

export default UserCartPageObject;
