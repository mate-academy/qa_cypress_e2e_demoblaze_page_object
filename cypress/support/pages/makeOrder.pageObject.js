class OrderPage {
  fillAllFields() {
    cy.get('#name').type('Mariia');
    cy.get('#country').type('Ukraine');
    cy.get('#city').type('Kyiv');
    cy.get('#card').type('5555444433332222');
    cy.get('#month').type('07');
    cy.get('#year').type('2026');
  }

  clickPurchase() {
    cy.get('button').contains('Purchase').click();
  }

  clickOk() {
    cy.get('.confirm.btn.btn-lg.btn-primary').click();
  }
}

export default OrderPage;
