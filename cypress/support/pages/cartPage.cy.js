class Cart {
  CheckingLaptopInTheCart() {
    cy.get('[class="navbar-nav ml-auto"]')
      .contains('Cart')
      .click();
    cy.get('[class="table-responsive"]')
      .should('contain', 'Sony vaio i7');
  }
};
export default Cart;
