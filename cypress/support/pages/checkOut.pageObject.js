class CheckoutPageObject {
  verifyProductInCart(productName, expectedPrice) {
    cy.get('tr.success').within(() => {
      cy.contains(productName).should('exist');
      cy.get('td').eq(2).invoke('text').then((price) => {
        const cartPrice = price.trim();
        expect(cartPrice).to.equal(expectedPrice);
      });
    });
  }

  clickPlaceOrder() {
    cy.get('button.btn.btn-success').contains('Place Order').click();
  }

  verifyPlaceOrderForm() {
    cy.get('h5#orderModalLabel').should('contain', 'Place order');
  }

  fillOrderForm({ name, country, city, card, month, year }) {
    cy.get('input#name').type(name);
    cy.get('input#country').type(country);
    cy.get('input#city').type(city);
    cy.get('input#card').type(card);
    cy.get('input#month').type(month);
    cy.get('input#year').type(year);
  }

  clickPurchase() {
    cy.get('button.btn.btn-primary').contains('Purchase').click();
  }

  verifyPurchaseDetails({ price, name, card }) {
    cy.get('p.lead.text-muted').should(($p) => {
      const text = $p.text();
      expect(text).to.include(`${price} USD`);
      expect(text).to.include(name);
      expect(text).to.include(card);
    });
  }

  confirmOrder() {
    cy.get('button.confirm.btn.btn-lg.btn-primary').click();
  }
}

export default CheckoutPageObject;
//
