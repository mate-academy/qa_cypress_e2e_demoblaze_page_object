import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  // get categoryLaptop() {
  //   return cy.contains('#itemc','Laptop');
  // }

  // clickOnLaptop() {
  //   this.categoryLaptop.click();
  // }
  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }

  clickAddToCartBtn() {
    cy.contains('.btn', 'Add to cart')
      .click();
  }

  clickACart() {
    cy.get('#cartur').click();
  }

  assertAddedproduct() {
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added.');
    });
  }
}

export default HomeAndCataloguePageObject;
