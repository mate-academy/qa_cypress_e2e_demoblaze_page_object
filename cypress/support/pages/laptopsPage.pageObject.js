import PageObject from '../PageObject';

class LaptopsPageObject extends PageObject {
  url = '/#';

  clickSonyVaioI7() {
    cy.contains('Sony vaio i7').click();
  }
}

export default LaptopsPageObject;
