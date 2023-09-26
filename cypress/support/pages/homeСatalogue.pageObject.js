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

  clickBtn(buttonName) {
    cy.contains('.btn', buttonName)
      .click();
  }
  
    assertAlert(){
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Thank you for your purchase!');
    });
  }
  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }
}

export default HomeAndCataloguePageObject;
