import PageObject from '../PageObject';

class CartPage extends PageObject {
  visitCart() {
    cy.contains('#cartur', 'Cart').click();
  };

  assertProductInCart(productName) {
    cy.contains(productName).should('be.visible');
  };

  placeOrderBtn() {
    cy.contains('.btn-success', 'Place Order').click();
  };

  fillOrderFields(orderName, userCountry, creditCard, month, city, year) {
    cy.get('#name').type(orderName);
    cy.get('#country').type(userCountry);
    cy.get('#card').type(creditCard);
    cy.get('#month').type(month);
    cy.get('#city').type(city);
    cy.get('#year').type(year);
  };

  confirmOrder() {
    cy.contains('.btn', 'Purchase').click();
  };

  assertEnteredDataOnModal (orderName, creditCard) {
    cy.get('.lead.text-muted').should('contain', orderName)
      .and('contain', creditCard);
  };

  clickOk() {
    cy.contains('OK').click();
  };
}
export default CartPage;
