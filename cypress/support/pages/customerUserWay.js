/// <reference types='cypress' />
let data;

export class SonyVaio7 {
  navigateToHome() {
    cy.visit('https://www.demoblaze.com');
  }

  clickLaptopTab() {
    cy.get('a#itemc')
      .contains('Laptops')
      .click();
  }

  clickSonyVaio7() {
    cy.get('a.hrefch')
      .contains('Sony vaio i7')
      .click();
  }

  addToTheCart() {
    cy.get('a.btn.btn-success.btn-lg')
      .contains('Add to cart')
      .click();
  }

  clickCartLink() {
    cy.contains('a', 'Cart')
      .click();
  }

  checkItemInTheCart() {
    cy.get('table')
      .should('contain.text', 'Sony vaio i7');
  }

  clickThePlaceOrderButton() {
    cy.get('.col-lg-1 > .btn')
      .click();
  }

  fillOutTheBuyingForm() {
    cy.task('generateDataForUser').then((generateDataForUser) => {
      data = generateDataForUser;
      cy.get('h5#orderModalLabel')
        .should('contain.text', 'Place order');

      cy.get('input#name')
        .type(data.username);

      cy.get('input#country')
        .type(data.country);

      cy.get('input#city')
        .type(data.city);

      cy.get('input#card')
        .type(data.creditCard);

      cy.get('input#month')
        .type(data.month);

      cy.get('input#year')
        .type(data.year);
    });
  }

  clickPurchase() {
    cy.get('#orderModal')
      .find('.modal-footer')
      .find('.btn-primary')
      .click();
  }

  clickOkButton() {
    cy.get('button.confirm')
      .click();
  }
}
