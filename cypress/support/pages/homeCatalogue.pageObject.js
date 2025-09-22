import PageObject from '../PageObject';

export default class HomePage extends PageObject {
  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName).click();
    return this;
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName).click();
    return this;
  }

  clickOnProduct(productName) {
    cy.contains('.hrefch', productName).click();
    return this;
  }

  clickOnAddToCart() {
    cy.contains('.btn', 'Add to cart').click();
    return this;
  }
}
