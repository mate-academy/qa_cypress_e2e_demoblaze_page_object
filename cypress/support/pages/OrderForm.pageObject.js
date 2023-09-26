import PageObject from '../PageObject';

class OrderFormPageObject extends PageObject {
  url = '/index.html';
  typeName(name){
    cy.get('#name').type(name);
}

  typeCountry(country) {
    cy.get('#country').type(country);
}

  typeCard(card) {
    cy.get('#card').type(card);
}

  typeName(name) {
    cy.get('#name').type(name);
}

  typeCity(city) {
    cy.get('#city').type(city);
}

  typeMonth(month) {
    cy.get('#month').type(month);
}

  typeYear(year) {
    cy.get('#year').type(year);
}

  assertOrder(){
    cy.get('.sweet-alert > h2').should('contain', 'Thank you for your purchase!')
 }

};
export default OrderFormPageObject;