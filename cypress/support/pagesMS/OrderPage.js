class OrderPage {
  fillingOrderDatailsFild(user) {
    cy.get('#name').type(user.name);
    cy.get('#country').type(user.country);
    cy.get('#city').type(user.city);
    cy.get('#card').type(user.creditCard);
    cy.get('#month').type(user.month);
    cy.get('#year').type(user.year);
  }

  clickPurchaseBtn() {
    cy.get('.btn').contains('Purchase').click();
  }

  assertrOderDatails(user) {
    cy.get('.text-muted').should('contain', user.name);
    cy.get('.text-muted').should('contain', user.creditCard);
  }

  clickConfirmbtn() {
    cy.get('.confirm').click();
  }
}

export const orderPage = new OrderPage();
