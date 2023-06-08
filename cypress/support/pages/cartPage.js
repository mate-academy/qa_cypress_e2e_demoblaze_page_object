import ProductPage from './productPage';

class CartPage extends ProductPage {
  clickOnCart() {
    cy.get('#cartur')
      .click();
  }

  checkProductInCart(productName) {
    cy.get('td')
      .should('contain', productName);
  }

  clickOnPlaceOrderBtn() {
    cy.contains('.btn', 'Place Order')
      .click();
  }
};

export default CartPage;
