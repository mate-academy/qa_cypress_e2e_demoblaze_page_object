export default class OrderModal {
  fillOrderForm(order) {
    cy.get("#name").type(order.name);
    cy.get("#country").type(order.country);
    cy.get("#city").type(order.city);
    cy.get("#card").type(order.card);
    cy.get("#month").type(order.month);
    cy.get("#year").type(order.year);
  }

  clickOnPurchase() {
    cy.contains("button", "Purchase").click();
  }

  assertOrderDetails(order) {
    cy.get(".sweet-alert")
      .should("contain", `Name: ${order.name}`)
      .and("contain", `Card Number: ${order.card}`);
  }

  clickOnOk() {
    cy.contains("button", "OK").click();
  }
}
