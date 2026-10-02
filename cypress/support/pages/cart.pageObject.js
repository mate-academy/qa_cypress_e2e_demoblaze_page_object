import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  get cartRows() {
    return cy.get('#tbodyid tr');
  }

  get totalPrice() {
    return cy.get('#totalp');
  }

  get placeOrderButton() {
    return cy.contains('button', 'Place Order');
  }

  get orderModal() {
    return cy.get('#orderModal');
  }

  get purchaseModal() {
    return cy.get('.sweet-alert');
  }

  getOrderField(field) {
    return this.orderModal.find(`#${field}`);
  }

  assertProduct(product, price) {
    this.cartRows.contains('td', product).parent().within(() => {
      cy.get('td').eq(1).should(($cell) => {
        expect($cell.text().trim()).to.eq(product);
      });
      cy.get('td').eq(2).should('have.text', String(price));
    });
    this.totalPrice.should('have.text', String(price));
  }

  placeOrder() {
    this.placeOrderButton.click();
    this.orderModal.should('be.visible');
    this.orderModal.find('.modal-dialog').should(($dialog) => {
      expect($dialog.css('transform')).to.be.oneOf([
        'none', 'matrix(1, 0, 0, 1, 0, 0)'
      ]);
    });
  }

  fillOrder(order) {
    this.getOrderField('name').type(order.name)
      .should('have.value', order.name);
    this.getOrderField('country').type(order.country)
      .should('have.value', order.country);
    this.getOrderField('city').type(order.city)
      .should('have.value', order.city);
    this.getOrderField('card').type(order.card)
      .should('have.value', order.card);
    this.getOrderField('month').type(order.month)
      .should('have.value', order.month);
    this.getOrderField('year').type(order.year)
      .should('have.value', order.year);
  }

  purchase() {
    this.orderModal.contains('button', 'Purchase').click();
  }

  assertPurchase(order, amount) {
    this.purchaseModal.should('be.visible').within(() => {
      cy.get('h2').should('have.text', 'Thank you for your purchase!');
      cy.get('p').should('contain.text', `Name: ${order.name}`)
        .and('contain.text', `Card Number: ${order.card}`)
        .and('contain.text', `Amount: ${amount} USD`);
    });
  }

  confirmPurchase() {
    this.purchaseModal.contains('button', 'OK').click();
    this.purchaseModal.should('not.be.visible');
  }
}

export default CartPageObject;
