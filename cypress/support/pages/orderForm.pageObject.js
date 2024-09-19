import PageObject from "../PageObject";

class OrderFormPageObject extends PageObject {
  url = "/index.html";

  fillFields() {
    cy.get("#name", { timeout: 5000 }).type("John");
    cy.get("#country", { timeout: 5000 }).type("John", { force: true });

    cy.get("#city", { timeout: 1000 }).type("John");
    cy.get("#card", { timeout: 1000 }).type("John");
    cy.get("#month", { timeout: 1000 }).type("John");
    cy.get("#year", { timeout: 1000 }).type("John");
  }

  verifyFields() {
    cy.get("#name").invoke("val").should("contain", "John");
    cy.get("#country").invoke("val").should("contain", "John");
    cy.get("#city").invoke("val").should("contain", "John");
    cy.get("#card").invoke("val").should("contain", "John");
    cy.get("#month").invoke("val").should("contain", "John");
    cy.get("#year").invoke("val").should("contain", "John");
  }

  completeOrder() {
    cy.get('[onclick="purchaseOrder()"]').click();
  }

  confirmOrderCompleted() {
    cy.get(".confirm.btn.btn-lg.btn-primary").click();
  }
}

export default OrderFormPageObject;