import PageObject from "../PageObject";

class CartPageObject extends PageObject {
    url = '/cart.html';

    get titleOfSonyVaio17() {
        return cy.get('td').contains('Sony vaio i7');
    }

    assertVerifyProductAdded(productName) {
        cy.get('#tbodyid').should('contain', productName);
    }

    clickOnPlaceOrderBtn() {
        cy.get('.btn-success').click();
    }

    get nameField() {
        return cy.get('#name');
    }

    get countryField() {
        return cy.get('#country');
    }

    get cityField() {
        return cy.get('#city');
    }

    get cardField() {
        return cy.get('#card');
    }

    get monthField() {
        return cy.get('#month');
    }

    get yearField() {
        return cy.get('#year');
    }

    get purchaseBtn () {
        return cy.contains('.btn', 'Purchase');
    }
    
    clickOnPurchaseBtn () {
        this.purchaseBtn.click();
    }

    get modal() {
        return cy.get('.sweet-alert p.lead');
    }

    get okButtonOfModal() {
        return cy.get('.sa-confirm-button-container');
    }

    get successfulPurchaseMessage() {
        return cy.get('h2');
    }

    assertSuccessfulPurchase(text) {
        this.successfulPurchaseMessage.should('contain', text);
    }

    assertDataOfModal(text) {
        this.modal.should('contain', text);
    }

    get successModalOkBtn () {
        return cy.contains('.btn', 'OK');
    }
    
    clickOnModalOkBtn () {
        this.successModalOkBtn.click();
    }
}

export default CartPageObject;