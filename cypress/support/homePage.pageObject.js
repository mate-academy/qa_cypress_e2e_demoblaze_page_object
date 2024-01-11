import PageObject from "./PageObject";

export class HomePage extends PageObject {
    url = '/';

    categoryList(category) {
        return cy.contains('.list-group-item', category);
    }

    product(name) {
        return cy.contains(name);
    }
    
    openProduct(name) {
        this.product(name).click();
    }

    get addToCartButton() {
        return cy.contains('Add to cart');
    }

    clickAddToCartButton() {
        this.addToCartButton.click();
    }

    get linkCart() {
        return cy.contains('.nav-link', 'Cart');
    }

    clickLinkCart() {
        this.linkCart.click();
    }

    checkProduct(name) {
        return cy.contains(name).should('exist');
    }

    checkUrl(url) {
        cy.url().should('include', url);
    }
}