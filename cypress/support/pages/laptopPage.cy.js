class LaptopPage {
  selectLaptopsCategory() {
    cy.contains('Laptops').click();
  }

  selectSonyLaptop() {
    cy.get('[class="hrefch"]')
      .contains('Sony vaio i7')
      .click();
  }

  clickOnTheAddBtn() {
    cy.get('[class="btn btn-success btn-lg"]')
      .contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.contains('Product added');
    });
    cy.on('window:confirm', () => true);
  }

  clickOnTheCartLink() {
    cy.get('[class="navbar-nav ml-auto"]')
      .contains('Cart')
      .click();
  }

  clickOnTheOrderBtn() {
    cy.get('[class="btn btn-success"]')
      .contains('Place Order')
      .click();
  }
};

export default LaptopPage;
