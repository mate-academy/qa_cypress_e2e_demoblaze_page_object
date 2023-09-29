import PageObject from '../PageObject';

class cartPageObject extends PageObject {
  url = '/cart.html';

  checkUrlEndPoint(urlEndpoint) {
    cy.url().should('include', urlEndpoint)
  }

  checkProductExistingInCart(productName) {
    cy.get('.table-responsive').should('contain.text', productName)
  }

  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName).click();
  }

  get nameField() {
    return cy.get('[id="name"]')
  }

  get countryField() {
    return cy.get('[id="country"]')
  }

  get cityField() {
return cy.get('[id="city"]')
  }

  get creditCardField() {
    return cy.get('[id="card"]')
  }

  get monthField() {
    return cy.get('[id="month"]')
  }

  get yearField() {
    return cy.get('[id="year"]')
  }

  fillNameField(name) {
    this.nameField.type(name)
  }

  fillCountryField(country) {
    this.countryField.type(country)
  }

  fillCityField(city) {
    this.cityField.type(city)
  }

  fillCreditCardField(card) {
    this.creditCardField.type(card)
  }

  fillMonthField(month) {
    this.monthField.type(month)
  }

  fillYearField(year) {
    this.yearField.type(year)
  }

  clickOnButton(buttonName) {
    cy.contains('.btn', buttonName).click();
  }
assertModal(modalMessage) {
  cy.get('.sweet-alert').should('contain.text', modalMessage)
}

assertCardInModal(cardNumber) {
  cy.get('.lead').should('contain.text', cardNumber)
}

assertNameInModal(userName) {
  cy.get('.lead').should('contain.text', userName)
}

clickOnButton(buttonName) {
  cy.contains('.btn', buttonName).click();
}
  }
export default cartPageObject;
