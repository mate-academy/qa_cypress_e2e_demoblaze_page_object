import PageObject from "../PageObject";

class CheckoutFormPageObject extends PageObject {
  url = "/index.html";

  get addToCartBtn() {
    return cy.contains(".btn-success", "Add to cart");
  }
  clickOnAddToCartBtn() {
    this.addToCartBtn.click();
  }
  assertProductInCart(productName) {
    cy.get("#tbodyid").should("contain", productName);
  }
  get placeOrderBtn() {
    return cy.contains(".btn-success", "Place Order");
  }
  clickOnThePlaceOrderBtn() {
    this.placeOrderBtn.click();
  }
  get nameField() {
    return cy.get("#name");
  }
  get countryField() {
    return cy.get("#country");
  }
  get cityField() {
    return cy.get("#city");
  }
  get creditCardField() {
    return cy.get("#card");
  }
  get monthField() {
    return cy.get("#month");
  }
  get yearField() {
    return cy.get("#year");
  }
  get purchaseBtn() {
    return cy.contains(".btn", "Purchase");
  }
  clickOnThePurchaseBtn() {
    this.purchaseBtn.click();
  }
  get successModal() {
    return cy.get(".sweet-alert");
  }
  assertSuccessModal(data) {
    this.successModal.should("contain", data);
  }
  get successModalOkBtn() {
    return cy.contains(".btn", "OK");
  }
  clickOnOkBtn() {
    this.successModalOkBtn.click();
  }
};

export default CheckoutFormPageObject;
