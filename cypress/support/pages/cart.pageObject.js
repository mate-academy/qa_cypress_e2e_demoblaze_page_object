/* eslint-disable */

import PageObject from '../PageObject'

class CartPageObject {
  assertProductInCart(productName) {
    cy.contains('td', productName).should('be.visible')
  }

  clickOnPlaceOrder() {
    cy.contains('Place Order').click()
  }

  fillOrderDetails(name, country, city, creditCard, month, year) {
    cy.get('input[id^="name"]').type(name)
    cy.get('input[id^="country"]').type(country)
    cy.get('input[id^="city"]').type(city)
    cy.get('input[id^="card"]').type(creditCard)
    cy.get('input[id^="month"]').type(month)
    cy.get('input[id^="year"]').type(year)
  }

  clickOnPurchase() {
    cy.contains('Purchase').click()
  }

  assertModalData(name, country, city, creditCard, month, year) {
    cy.contains('Id').should('be.visible')
    cy.contains('Amount').should('be.visible')
    cy.contains('Card Number').should('be.visible')
    cy.contains('Name').should('exist')
    cy.contains('Date').should('be.visible')
    cy.contains('Country').should('be.visible')
  }

  clickOnOk() {
    cy.contains('OK').click()
  }
}

export default CartPageObject
