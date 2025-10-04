class PlaceOrderModalPageObject {
  get nameField() { return cy.get('#name'); }
  get countryField() { return cy.get('#country'); }
  get cityField() { return cy.get('#city'); }
  get creditCardField() { return cy.get('#card'); }
  get monthField() { return cy.get('#month'); }
  get yearField() { return cy.get('#year'); }
  get purchaseBtn() { return cy.contains('button', 'Purchase'); }

  fillOrderForm({ name, country, city, creditCard, month, year }) {
    this.nameField.type(name);
    this.countryField.type(country);
    this.cityField.type(city);
    this.creditCardField.type(creditCard);
    this.monthField.type(month);
    this.yearField.type(year);
  }

  clickPurchase() {
    this.purchaseBtn.click();
  }
}

export default PlaceOrderModalPageObject;
