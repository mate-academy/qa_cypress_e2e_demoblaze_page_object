import PageObject from '../PageObject';

class PlaceOrderFormPageObject extends PageObject {
    url = '/cart.html';

    typeName(name) {
        cy.getById('name').type(name);
    }

    typeCountry(country) {
        cy.getById('country').type(country);
    }

    typeCity(city) {
        cy.getById('city').type(city);
    }

    typeCreditCard(creditCard) {
        cy.getById('card').type(creditCard);
    }

    typeMonth(month) {
        cy.getById('month').type(month);
    }

    typeYear(year) {
        cy.getById('year').type(year);
    }

    clickPurchaseBtn() {
        cy.get('[onclick="purchaseOrder()"]').click();
    }

    assertEnteredData(name, creditCard) {
        cy.get('.sweet-alert')
            .should('contain', `Name: ${name}`)
            .and('contain', `Card Number: ${creditCard}`);
    }

    clickOkBtn() {
        cy.contains('button', 'OK').click();
    }
}

export default PlaceOrderFormPageObject;