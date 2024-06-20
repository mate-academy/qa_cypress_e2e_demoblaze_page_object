import PageObject from "../PageObject";

class ContactFormPageObject extends PageObject {
  url = "/cart.html";

  get placeOrderBtn() {
    return cy.get(".btn:contains('Place Order')");
  }
  clickPlaceOrderBtn() {
    this.placeOrderBtn.click();
  }

  get nameField() {
    return cy.get("#name").should('exist')
  }

  get countryField() {
    return cy.get("#country");
  }

  get cityField() {
    return cy.get("#city");
  }

  get cardField() {
    return cy.get("#card");
  }

  get monthField() {
    return cy.get("#month");
  }

  get yearField() {
    return cy.get("#year");
  }

  get purchaseBtn() {
    return cy.get(".btn", "Purchase");
  }
  clickPurchaseBtn() {
    this.purchaseBtn.click();
  }

  get successfulMessageModal() {
    return cy.get(".sweet-alert");
  }
  assertSuccessfulMessageModal() {
    this.successfulMessageModal.should("be.visible");
  }

  get okBtn() {
    return cy.get(".confirm", "OK");
  }
  clickOKBtn() {
    this.okBtn.click();
  }
}

export default ContactFormPageObject;
