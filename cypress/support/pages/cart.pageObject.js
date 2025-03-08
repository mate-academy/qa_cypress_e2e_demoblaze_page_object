import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/index.html';

  verifyItemInCart(itemName) {
    cy.contains(itemName)
      .should('exist');
  }

  clickOnButton(buttonText) {
    cy.contains(buttonText, { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  verifyOrderModalVisible() {
    cy.get('h5#orderModalLabel')
      .contains('Place order')
      .should('be.visible');
  }

  fillOrderForm(data) {
    Object.keys(data).forEach((key) => {
      cy.get(`#${key}`).scrollIntoView();
      cy.get(`#${key}`)
        .should('be.visible')
        .type(data[key]);
    });
  }

  verifyConfirmationData(orderData) {
    cy.get('.lead.text-muted')
      .should('be.visible')
      .then(($el) => {
        const text = $el.text();
        expect(text).to.include(orderData.name);
        expect(text).to.include(orderData.card);
      });
  }
}

export default CartPageObject;
