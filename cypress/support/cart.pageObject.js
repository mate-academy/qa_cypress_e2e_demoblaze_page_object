import PageObject from "./PageObject";

export class Cart extends PageObject {
    url = '/cart.html';

    checkUrl(url) {
        cy.url().should('include', url);
    }

    get placeOrder() {
        return cy.get('[data-target="#orderModal"]');
    }

    clickplaceOrder() {
        this.placeOrder.click();
    }

    get nameField() {
        return cy.inputField('name');
    }

    inputNameField(value) {
        this.nameField.type(value);
    };

    get countryField() {
        return cy.inputField('country')
    }
    
    inputCountryField(value) {
        this.countryField.type(value);
    };

    get cityField() {
        return cy.inputField('city');
    };

    inputCityField(value) {
        this.cityField.type(value);
    };

    get cardField() {
        return cy.inputField('card');
    };

    inputCardFiled(value) {
        this.cardField.type(value);
    };

    get monthField() {
        return cy.inputField('month');
    };

    inputMonthFiled(value) {
        this.monthField.type(value);
    };

    get yearField() {
        return cy.inputField('year');
    };

    inputYearField(value) {
        this.yearField.type(value);
    };

    get purchace() {
        return cy.contains('Purchase');
    };

    clickPurchace() {
        this.purchace.click();
    };

    get swalAlert() {
        return cy.get('.sweet-alert');
    };

    checkUserInAlert(username) {
        this.swalAlert.should('contain', username);
    };

    get confirmButton() {
        return cy.get('.confirm');
    };

    clickConfirmButton() {
        this.confirmButton.click();
    };
}