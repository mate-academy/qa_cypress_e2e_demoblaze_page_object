import faker from 'faker';
import PageObject from '../PageObject';

const orderData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  creditCard: faker.finance.creditCardNumber(),
  creditCardMonth: faker.date.month(),
  creditCardYear: faker.random.number({ min: 2015, max: 2023 })
};

class CheckoutPageObject extends PageObject {
  get laptopsBtn() {
    return cy.get('[onclick="byCat(\'notebook\')"]');
  }

  clickOnLaptopsBtn() {
    this.laptopsBtn.click();
  }

  get sonyVioI7Btn() {
    return cy.get('[href="prod.html?idp_=9"]');
  }

  clickOnSonyVioI7Btn() {
    this.sonyVioI7Btn.eq(1).click();
  }

  get addToCartBtn() {
    return cy.get('[onclick="addToCart(9)"]');
  }

  clickOnaddToCartBtn() {
    this.addToCartBtn.click();
  }

  get cartBtn() {
    return cy.get('#cartur');
  }

  clickOnCartBtn() {
    this.cartBtn.click();
  }

  get productTitle() {
    return cy.get('#tbodyid');
  }

  verifyProductTitle() {
    this.productTitle.should('contain', 'Sony vaio i7');
  }

  get placeOrderBtn() {
    return cy.get('.btn.btn-success');
  }

  clickOnPlaceOrderBtn() {
    this.placeOrderBtn.click();
  }

  get nameField() {
    return cy.get('#name');
  }

  typeName() {
    this.nameField.type(orderData.name);
  }

  get countryField() {
    return cy.get('#country');
  }

  typeCountry() {
    this.countryField.type(orderData.country);
  }

  get cityField() {
    return cy.get('#city');
  }

  typeCity() {
    this.cityField.type(orderData.city);
  }

  get creditCardField() {
    return cy.get('#card');
  }

  typeCreditCard() {
    this.creditCardField.type(orderData.creditCard);
  }

  get creditCardMonthField() {
    return cy.get('#month');
  }

  typeCreditCardMonth() {
    this.creditCardMonthField.type(orderData.creditCardMonth);
  }

  get creditCardYearField() {
    return cy.get('#year');
  }

  typeCreditCardYear() {
    this.creditCardYearField.type(orderData.creditCardYear);
  }

  get purchaseBtn() {
    return cy.contains('.btn.btn-primary', 'Purchase');
  }

  clickOnPurchaseBtn() {
    this.purchaseBtn.click();
  }

  get nameAndCardNumber() {
    return cy.get('.lead.text-muted');
  }

  verifyName() {
    this.nameAndCardNumber.should('contain', orderData.name);
  }

  verifyCardNumber() {
    this.nameAndCardNumber.should('contain', orderData.creditCard);
  }

  get okBtn() {
    return cy.contains('.confirm.btn.btn-lg.btn-primary', 'OK');
  }

  clickOnOKBtn() {
    this.okBtn.click();
  }
}
export default CheckoutPageObject;
