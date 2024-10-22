import { faker } from '@faker-js/faker';

/// <reference types='cypress' />

const categoryName = 'Laptops';
const product = 'Sony vaio i7';
const testMessage = 'Product added';
const cart = 'Cart';
const item = 'Sony vaio i7';

const user = {  
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,  
  country: 'Canada',  
  city: 'Ottawa',  
  creditCard: {    
    number: faker.finance.creditCardNumber(),    
    expirationMonth: faker.date.month(),    
    expirationYear: faker.date.future({ years: 5 }).getFullYear()  
  }
};

describe('Visit the home page', () => {  
  before(() => {    
    cy.visit('/');  
  });

  it('Should complete a flow', () => {    
    cy.contains(categoryName).click();    
    cy.contains(product).click();    
    cy.contains('Add to cart').click();

    cy.on('window:alert', (str) => {      
      expect(str).to.equal(testMessage);    
    });

    cy.contains(cart).click();
    cy.get('tr').within(() => {      
      cy.get('td').contains(item).should('be.visible');    
    });

    cy.contains('Place Order').click();

       
    cy.get('#name').type(user.name);    
    cy.get('#country').type(user.country);    
    cy.get('#city').type(user.city);    
    cy.get('#card').type(user.creditCard.number);    
    cy.get('#month').type(user.creditCard.expirationMonth);    
    cy.get('#year').type(user.creditCard.expirationYear);    
    cy.contains('Purchase').click();

        
    cy.get('.lead').should('include.text', user.name.split(' ')[0]);    
    cy.get('.lead').should('include.text', user.creditCard.number); 

      
    cy.get('button.confirm.btn.btn-lg.btn-primary').click();  
  });
});
