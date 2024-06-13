import PageObject from '../PageObject';

class ContactFormPageObject extends PageObject {
  url = '/index.html';

  get placeOrderBtn() {
    return cy.get(".btn", "Place Order");
  }
  clickPlaceOrderBtn() {
    this.placeOrderBtn.click();
  }
  get nameField() {
    return cy.get("#name").should('exist')
  }
  get country_field() {
    return cy.get("#country");
  }
  get city_field() {
    return cy.get("#city");
  }
  
  get card_field() {
    return cy.get("#card");
  }
  get month_field() {
    return cy.get("#month");
  }
  get year_field() {
    return cy.get("#year");
  }
  get purchase_btn() {
    return cy.get(".btn", "Purchase");
  }
  click_purchase_btn() {
    this.purchase_btn.click();
  }

  get successful_message_modal() {
    return cy.get(".sweet-alert");
  }
  assert_succesful_message() {
    this.successful_message_modal.should("be.visible");
  }
  get okBtn() {
    return cy.get(".confirm", "OK");
  }
  click_okBtn() {
    this.okBtn.click();
  }
}

export default ContactFormPageObject;
