import PageObject from "../PageObject";

class ContactFormPageObject extends PageObject {
  url = "/cart.html";

  checkIsCartPageOpened() {
    cy.url("equal", this.url);
  }

  checkIsProductExistInCart(productName) {
    cy.get("td").should("contain", productName);
  }

  fillAllFields(info) {
    cy.get("#name").type(info.name);
    cy.get("#country").type(info.country);
    cy.get("#city").type(info.city);
    cy.get("#card").type(info.creditCard);
    cy.get("#month").type(info.creditMonth);
    cy.get("#year").type(info.creditYear);
  }

  clickPurchaseButton() {
    cy.get(".btn").contains("Purchase").click();
  }

  verifyOrder(info) {
    cy.get(".lead")
      .should("contain", info.name)
      .should("contain", info.creditCard);
  }
}

export default ContactFormPageObject;
