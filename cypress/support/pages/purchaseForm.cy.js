
class CheckoutForm {
  url = 'https://www.demoblaze.com/cart.html';

  get nameField() {
    return cy.get('[id="name"]');
  }

  get countryField() {
    return cy.get('[id="country"]');
  }

  get cityField() {
    return cy.get('[id="city"]');
  }

  get cardField() {
    return cy.get('[id="card"]');
  }

  get cardMonth() {
    return cy.get('[id="month"]');
  }

  get cardYearField() {
    return cy.get('[id="year"]');
  }

  get purchaseBtn() {
    return cy.contains('.btn', 'Purchase');
  }

  get okBtn() {
    return cy.contains('.btn', 'OK');
  }

  assertAddedProduct() {
    cy.on('window:alert', (str) => {
      expect(str).to.contains('Product added');
    });
  }

  clickOnOkBtn() {
    this.okBtn.click();
  }

  assertOrderMessage(message) {
    cy.contains(message).should('exist');
  }

  assertForAmountField(expectedAmount) {
    cy.contains(`Amount: ${expectedAmount} USD`).should('exist');
  }

  assertForCardNumberField(cardNumber) {
    cy.contains(`Card Number: ${cardNumber}`).should('exist');
  }

  assertForNameField(name) {
    cy.contains(`Name: ${name}`).should('exist');
  }

  assertForDateField(currentDate) {
    cy.contains(`Date: ${currentDate}`).should('exist');
  }

  typeName(name) {
    this.nameField.type(name, { force: true });
  }

  typeCityName(cityname) {
    this.cityField.type(cityname);
  }

  typeCountryName(countryname) {
    this.countryField.type(countryname, { force: true });
  }

  typeCreditCardNumber(cardnumber) {
    this.cardField.type(cardnumber);
  }

  typeMonthCard(cardmonth) {
    this.cardMonth.type(cardmonth);
  }

  typeYearCard(cardyear) {
    this.cardYearField.type(cardyear);
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }
};

export default CheckoutForm;
