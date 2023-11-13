import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  clickOnLink(Home) {
    cy.contains('.nav-link', Home)
      .click();
  }

  clickOnOk(OK) {
    cy.contains('.confirm', OK)
      .click();
  }

  clickOnLinkCart(Cart) {
    cy.contains('.nav-link', Cart)
      .click();
  }
  clickOnPlaceOrder(PlaceOrder) {
    cy.contains('.btn', 'Place Order')
      .click();
  }

  clickOnCategory(Laptop) {
    cy.contains('#itemc', Laptop)
      .click();
  }

  clickOnProduct(Sonyi7) {
    cy.contains('.hrefch', 'Sony vaio i7')
      .click();
  }

  clickOnPurchase(Purchase) {
    cy.contains('.btn-primary', Purchase)
      .click();
  }

  clickAddProduct(addToCart) {
    cy.contains('.btn-success', 'Add to cart')
      .click();
  }
}

export default HomeAndCataloguePageObject;
