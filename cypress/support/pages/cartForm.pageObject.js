import PageObject from '../PageObject';
import faker from 'faker';

const testData = {

  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  cardNumber: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: Math.floor(Math.random() * (2031 - 2023) + 2023),
  successMessage: 'Thank you for your purchase'
};

class cartFormPageObject extends PageObject {
  url = '/cart.html';

  get cartList() {
    return cy.get('.col-lg-8');
  };

  get placeOrderBtn() {
    return cy.contains('Place Order').click();
  };
  
  get nameField() {
    return cy.get('#name').type(testData.name);
  };

  get countryField() {
    return cy.get('#country').type(testData.country);
  };

  get cityField() {
    return cy.get('#city').type(testData.city);
  };

  get cardField() {
    return cy.get('#card').type(testData.cardNumber);
  };

  get monthField() {
    return cy.get('#month').type(testData.month);
  };

  get yearField() {
    return cy.get('#year').type(testData.year);
  };

  get purchaseBtn() {
    return cy.contains('Purchase').click();
  };

  get checkMainAlert() {
    return cy.get('.sweet-alert')
      .should('contain', testData.successMessage);
  };

  get checkNameAlert() {
    return cy.get('.lead') 
      .should('contain', testData.name);;
  };

  get checkCardAlert() {
    return cy.get('.lead') 
      .should('contain', testData.cardNumber);
  };

  get okBtn() {
    return cy.contains('OK').click();
  };
 
}

export default cartFormPageObject;