import PageObject from "./PageObject";

export class Cart extends PageObject {
    url = '/cart.html';

    get placeOrder() {
        return cy.get('[data-target="#orderModal"]');
    }

    clickplaceOrder() {
        this.placeOrder.click();
    }

    inputData(field) {
        return cy.inputField(field);
    }

    // get country() {
    //     return cy.get('#country');
    // }

    // get city() {
    //     return cy.get('#city');
    // }

    // get card() {
    //     return cy.get('#card');
    // }

    // get month() {
    //     return cy.get('#month');
    // }

    // get year() {
    //     return cy.get('#year');
    // }

    get purchace() {
        return cy.contains('Purchase');
    }

    clickPurchace() {
        this.purchace.click();
    }

    get confirmButton() {
        return cy.get('.confirm')
    }

    clickConfirmButton() {
        this.confirmButton.click()
    }
}