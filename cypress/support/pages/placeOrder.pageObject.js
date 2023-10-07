import PageObject from '../PageObject';
import { faker } from '@faker-js/faker';
import getRandomIntegerNumber from '../getRandomIntegerNumber';

class PlaceOrderPageObject extends PageObject {
  constructor(name, cardNumber) {
    super();
    this.name = name;
    this.cardNumber = cardNumber;
  }

  elements = {
    nameInput: () => cy.get('#name'),
    countryInput: () => cy.get('#country'),
    cityInput: () => cy.get('#city'),
    cardInput: () => cy.get('#card'),
    monthInput: () => cy.get('#month'),
    yearInput: () => cy.get('#year'),
    purchaseBtn: () => cy.contains('.btn', 'Purchase')
  };

  fillName() {
    this.elements.nameInput().type(this.name || faker.person.fullName());
  }

  fillRandomCountry() {
    const country = faker.location.country();
    this.elements.countryInput().type(country);
  }

  fillRandomCity() {
    const city = faker.location.city();
    this.elements.cityInput().type(city);
  }

  fillCard() {
    this.elements
      .cardInput()
      .type(this.cardNumber || faker.finance.creditCardNumber());
  }

  fillRandomMonth() {
    const month = getRandomIntegerNumber(1, 12);
    this.elements.monthInput().type(month);
  }

  fillRandomYear() {
    const year = getRandomIntegerNumber(2020, 2022);
    this.elements.yearInput().type(year);
  }

  clickOnPurchase() {
    this.elements.purchaseBtn().click();
  }

  fillFormAndPurchase() {
    this.fillName();
    this.fillRandomCountry();
    this.fillRandomCity();
    this.fillCard();
    this.fillRandomMonth();
    this.fillRandomYear();
    this.clickOnPurchase();
  }
}

export default PlaceOrderPageObject;
