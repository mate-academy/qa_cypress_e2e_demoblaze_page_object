import PageObject from '../PageObject';
/// <reference types="cypress" />

class HomeAndCatalogue extends PageObject {
  url = '/index.html';

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

  get alertMess() {
    return cy.get('.sweet-alert > h2');
  }

  clickOnLink(linkName) {
    cy.contains('.nav-link', linkName).click();
  }

  clickOnCategory(categoryName) {
    cy.contains('#itemc', categoryName).click();
  }

  clickOnProduct(product) {
    cy.contains('.hrefch', product).click();
  }

  addToCart() {
    cy.contains('a', 'Add to cart').click();
  }

  assertProduct(name) {
    cy.contains('table  tbody  td', name).should('exist');
  }

  clickOnOrder() {
    cy.get('button[data-target="#orderModal"]').click();
  }

  clickOnPurchase() {
    cy.get('button[onclick="purchaseOrder()"]').click();
  }

  typeName(name) {
    this.nameField.type(name);
  }

  typeCountry(country) {
    this.countryField.type(country);
  }

  typeCity(city) {
    this.cityField.type(city);
  }

  typeCreditCart(creditCart) {
    this.creditCardField.type(creditCart);
  }

  typeMonth(month) {
    this.monthField.type(month);
  }

  typeYear(year) {
    this.yearField.type(year);
  }

  assertEnteredData(card, name) {
    this.alertMess.should('be.visible');
    cy.contains('p', card).should('be.visible');
    cy.contains('p', name).should('be.visible');
    cy.get('button.confirm').click();
  }
}

export default HomeAndCatalogue;
