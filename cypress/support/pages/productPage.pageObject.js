import PageObject from '../PageObject';

class ProductPagePageObject extends PageObject {
  url = '/prod.html';

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  addToCard() {
    cy.location('pathname')
      .should('eq', this.url);
    cy.get('a')
      .contains('Add to cart')
      .click();
  }
}

export default ProductPagePageObject;
