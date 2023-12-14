import PageObject from "../PageObject";

class PlaceOrderForm extends PageObject {

    get name() {
        return cy.get('#name');
    }
    get country() {
        return cy.get('#country');
    }
    get city() {
        return cy.get('#city');
    }
    get creditCard() {
        return cy.get('#card');
    }
    get month() {
        return cy.get('#month');
    }
    get year() {
        return cy.get('#year');
    }

    get purchaseBtn() {
        return cy.get('button').contains('Purchase');
    }

    get okBtn() {
        return cy.get('button').contains('OK');
    }
}

export default PlaceOrderForm;