/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import { faker } from '@faker-js/faker';  // Обновленный импорт

const homePage = new HomeAndCataloguePageObject();
const contactForm = new ContactFormPageObject();
const testData = {
  product: 'Sony vaio i7',
  category: 'Laptops',
  alertMessage: 'Product added',
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: '12',
  year: '2024',
  successMessage: 'Thanks for the message!!'
};

describe('Demoblaze Checkout Flow', () => {
  before(() => {
    homePage.visit(); // Переход на домашнюю страницу
  });

  it('should complete checkout flow', () => {

    homePage.clickOnCategory(testData.category);

    homePage.clickOnProduct(testData.product);

    homePage.addToCart();
    homePage.assertAllert(testData.alertMessage);


    cy.contains('Cart').click();
    cy.contains(testData.product).should('be.visible');
    cy.contains('Place Order').click();


    cy.get('#name').type(testData.name);
    cy.get('#country').type(testData.country);
    cy.get('#city').type(testData.city);
    cy.get('#card').type(testData.card);
    cy.get('#month').type(testData.month);
    cy.get('#year').type(testData.year);


    cy.contains('Purchase').click();

    cy.get('.sweet-alert').should('contain', testData.name);
    cy.get('.sweet-alert').should('contain', testData.card);

    cy.contains('OK').click();
  });
});

