class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAllert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }

  assertProductInCart(productName) {
    cy.get('#tbodyid')
      .should('contain', productName);
  }

  assertPurchaseSuccess(message, cardNumber, name) {
    cy.get('.sweet-overlay') //щось не те з цим селектором, сайпрес його не находить, не вирішила це
      .should('contain', message)
      .and('contain', cardNumber)
      .and('contain', name);
  }
}

export default PageObject;
