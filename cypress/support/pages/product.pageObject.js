import PageObject from '../PageObject';

class ProductPage extends PageObject {
  url = '/index.html/prod.html?idp_=9';

  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName)
      .click();
  }
}

export default ProductPage;
