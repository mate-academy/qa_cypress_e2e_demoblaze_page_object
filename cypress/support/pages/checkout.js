class CheckoutPage {
  addToCart() {
    cy.contains('Add to cart').click();
  }

  assertProductAddedAlert() {
    cy.on('window:alert', (txt) => {
      expect(txt).to.contain('Product added');
    });
  }

  ensureOrderModalVisible() {
    cy.get('#orderModal')
      .should('have.class', 'show')
      .and('be.visible');
  }

  fillOrderForm({ name, country, city, card, month, year }) {
    cy.get('#name').clear();
    cy.get('#name').type(name);

    cy.get('#country').clear();
    cy.get('#country').type(country);

    cy.get('#city').clear();
    cy.get('#city').type(city);

    cy.get('#card').clear();
    cy.get('#card').type(card);

    cy.get('#month').clear();
    cy.get('#month').type(month);

    cy.get('#year').clear();
    cy.get('#year').type(year);
  }

  purchase() {
    cy.contains('Purchase').click();
  }

  // ✅ More robust confirmation assertion
  assertConfirmationContains({ card, namePart }) {
    cy.get('.sweet-alert')
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(text).to.include('Thank you for your purchase!');
        expect(text).to.include(card);
        expect(text).to.include(namePart); // e.g. "John"
      });
  }

  confirmPurchase() {
    cy.get('.confirm').should('be.visible').click();
  }
}

export default CheckoutPage;
