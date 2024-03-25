import PageObject from '../PageObject';

class HomeAndCataloguePageObject extends PageObject {
  url = '/index.html';

  get addToChartButton() {
    return cy.get('[onclick="addToCart(9)"]');
  }

  get placeOrderButton() {
    return cy.contains('.btn', 'Place Order');
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName)
      .click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName)
      .click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product)
      .click();
  }

  assertAlertMessage(alertMessage) {
    return cy.on('window:alert', (alert) => {
      expect(alert).to.include(alertMessage);
    });
  }

  assertProductInCart(productName) {
    return cy.get('#tbodyid').should('contain', productName);
  }
}
export default HomeAndCataloguePageObject;
