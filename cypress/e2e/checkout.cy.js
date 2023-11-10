/// <reference types='cypress' />
import faker from 'faker';

describe('Demoblaze', () => {
  before(() => {
  });

  it('should provide the ability to register', () => {
    cy.visit('https://www.demoblaze.com');
    const randomNumber = Math.floor(Math.random() * 100000);
    const userName = faker.name.firstName() + randomNumber;
    const password = faker.internet.password();
    cy.get('#signin2').click();
    cy.get('#sign-username').click().type(userName);
    cy.get('#sign-password').click().type(password);
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    cy.get('[onclick="byCat(\'notebook\')"]').click().should('exist').wait(3000);
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get('#cartur').click();
    cy.get('#page-wrapper').should('exist');
    cy.get('.col-lg-1 > .btn').click();
    cy.get('#name').click().type(userName);
    cy.get('#country').click().type('Ukraine');
    cy.get('#city').click().type('Lviv');
    cy.get('#card').click().type('12345678910');
    cy.get('#month').click().type('November');
    cy.get('#year').click().type('2023');
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('.confirm').click();
    cy.get('.sweet-alert');
  });
});

