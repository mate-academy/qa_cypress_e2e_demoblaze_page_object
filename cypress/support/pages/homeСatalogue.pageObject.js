import PageObject from '../PageObject';

class HomePageObject extends PageObject {
  url = '/index.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName).click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName).click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product).click();
  }

  get addToCartBtn() {
    return cy.contains('.btn', 'Add to cart');
  }

  clickOnaddToCartBtn() {
    this.addToCartBtn.click();
  }
}

export default HomePageObject;
