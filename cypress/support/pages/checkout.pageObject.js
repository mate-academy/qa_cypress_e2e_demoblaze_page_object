import PageObject from '../PageObject';

class CheckoutPageObject extends PageObject {
  url = '/index.html';

  get laptopsField() {
    return cy.contains('Laptops');
  }

  laptopsFieldClick() {
    this.laptopsField.click();
  }

  get laptopItem() {
    return cy.get('a').contains('Sony vaio i7');
  }

  laptopItemClick() {
    this.laptopItem.click();
  }

  get addToCartBtn() {
    return cy.contains('a', 'Add to cart');
  }

  addToCartBtnClick() {
    this.addToCartBtn.click();
  }

  alertMessage() {
    return this.assertAllert('Product added');
  }

  get cartBtn() {
    return cy.get('#cartur');
  }

  cartBtnClick() {
    this.cartBtn.click();
  }

  assertCart() {
    return cy.get('#tbodyid').find('tr').should('have.length', 1);
  }

  get placeOrderBtn() {
    return cy.contains('Place Order');
  }

  placeOrderBtnClick() {
    this.placeOrderBtn.click();
  }

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
    return cy.contains('Purchase');
  }

  get successModal() {
    return cy.get('.sweet-alert');
  }

  assertSuccessModal() {
    return this.successModal.should('be.visible');
  }

  confirmModal() {
    return cy.get('.confirm').click();
  }

  purchaseBtnClick() {
    this.purchaseBtn.click();
  }

  fillNameField(name) {
    this.nameField.type(name);
  }

  fillCountryField(country) {
    this.countryField.type(country);
  }

  fillCityField(city) {
    this.cityField.type(city);
  }

  fillCreditCardField(creditCard) {
    this.creditCardField.type(creditCard);
  }

  fillMonthField(month) {
    this.monthField.type(month);
  }

  fillYearField(year) {
    this.yearField.type(year);
  }
}

export default CheckoutPageObject;
