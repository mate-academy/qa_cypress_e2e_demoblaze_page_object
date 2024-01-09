import PageObject from '../PageObject';

class CartPageObject extends PageObject {
  url = '/cart.html';

  clickOnButton(button) {
    cy.contains('.btn', button)
      .click();
  }

  buyerName(name) {
    cy.get('#name')
      .type(name);
  }

  buyerCountry(country) {
    cy.get('#country')
      .type(country);
  }

  buyerCity(city) {
    cy.get('#city')
      .type(city);
  }

  buyerCard(card) {
    cy.get('#card')
      .type(card);
  }

  buyerMonth(month) {
    cy.get('#month')
      .type(month);
  }

  buyerYear(year) {
    cy.get('#year')
      .type(year);
  }

  confirmButton(confirm) {
    cy.contains('.confirm', confirm)
      .click();
  }

  get selectedItem() {
    return cy.get('.table-responsive');
  }

  assertItemInTheCart() {
    this.selectedItem.should('contain', 'Sony vaio i7');
  }

  get modal() {
    return cy.get('.sweet-alert');
  }

  assertEnteredDataInModal(buyerName, buyerCard) {
    this.modal.should('contain', 'Thank you for your purchase')
      .and('contain', buyerName)
      .and('contain', buyerCard);
  }
}

export default CartPageObject;
