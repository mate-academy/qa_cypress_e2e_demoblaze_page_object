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

    get purchace() {
        return cy.contains('Purchase');
    }

    clickPurchace() {
        this.purchace.click();
    }

    checkUserInAlert(username) {
        cy.get('.sweet-alert').should('contain', username);
    }

    get confirmButton() {
        return cy.get('.confirm')
    }

    clickConfirmButton() {
        this.confirmButton.click()
    }
}