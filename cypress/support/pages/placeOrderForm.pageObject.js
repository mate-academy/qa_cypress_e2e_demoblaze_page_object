import CartPageObject from './cart.pageObject';

class PlaceOrderFormPageObject extends CartPageObject {
  get nameField() {
    return cy.get('#name');
  }

  get countryField() {
    return cy.get('#country');
  }

  get cityField() {
    return cy.get('#city');
  }

  get creditCardField() {
    return cy.get('#card');
  }

  get monthField() {
    return cy.get('#month');
  }

  get yearField() {
    return cy.get('#year');
  }

  get purchaseBtn() {
    return cy.contains('button', 'Purchase');
  }

  fillPlaceOrderForm(formData) {
    const {
      name,
      country,
      city,
      creditCard,
      month,
      year
    } = formData;

    this.nameField.type(name);

    this.countryField.type(country);

    this.cityField.type(city);

    this.creditCardField.type(creditCard);

    this.monthField.type(month);

    this.yearField.type(year);
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }
}

export default PlaceOrderFormPageObject;
