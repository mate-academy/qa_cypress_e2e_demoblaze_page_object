// PageObject.js
class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }

  assertAlert(alertMessage) {
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  }
}

class HomePage extends PageObject {
  clickCategory(name) {
    cy.contains('.list-group a', name).click();
  }

  clickProduct(name) {
    cy.contains('.card-title a', name).click();
  }

  navigateToCart() {
    cy.contains('a', 'Cart').click();
  }
}

class ProductPage extends PageObject {
  addToCart() {
    cy.contains('a', 'Add to cart').click();
  }
}

class CartPage extends PageObject {
  assertProductInCart(name) {
    cy.get('#tbodyid').contains('td', name).should('be.visible');
  }

  placeOrder() {
    cy.contains('button', 'Place Order').click();
  }

  fillOrderForm(data) {
    cy.get('#name').type(data.name);
    cy.get('#country').type(data.country);
    cy.get('#city').type(data.city);
    cy.get('#card').type(data.card);
    cy.get('#month').type(data.month);
    cy.get('#year').type(data.year);
  }

  purchase() {
    cy.contains('button', 'Purchase').click();
  }

  assertPurchaseData(data) {
    cy.get('.sweet-alert').should('contain.text', data.name);
    cy.get('.sweet-alert').should('contain.text', data.country);
    cy.get('.sweet-alert').should('contain.text', data.card);
  }

  confirmOk() {
    cy.contains('button', 'OK').click();
  }
}

export { PageObject, HomePage, ProductPage, CartPage };
