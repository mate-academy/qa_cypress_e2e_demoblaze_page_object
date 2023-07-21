import PageObject from '../PageObject';

class categoryPageObject extends PageObject {
  url = '/index.html#';

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
};
};

export default categoryPageObject;
