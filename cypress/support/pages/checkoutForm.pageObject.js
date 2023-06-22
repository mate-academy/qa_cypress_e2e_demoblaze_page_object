import PageObject from "../PageObject";

class checkoutForm extends PageObject { 
    url = '/index.html';

    get addToCartButton() {
        return cy.contains('.btn-success', 'Add to cart');
    }

    clickOnAddToCartButton() {
        this.addToCartButton.click();
    }

    assertProductInCart(product) {
        cy.get('#tbodyid').should('contain', product);
    }

    get placeOrderButton() {
        return  cy.contains('.btn-success', 'Place Order');
    }

    clickOnOrderButton() {
        this.placeOrderButton.click();
    }

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

    get purchaseButton() {
        return cy.contains('.btn', 'Purchase');
    }

    clickOnPurchaseButton() {
        this.purchaseButton.click();
    }

    get successModal () {
        return cy.get('.sweet-alert');
    }

    assertSuccessModal (data) {
      this.successModal
        .should('contain', data);
    }

    get successModalOkBtn () {
        return cy.contains('.btn', 'OK');
    }

    clickOnModalOkBtn () {
        this.successModalOkBtn.click();
    }
}

export default checkoutForm;
