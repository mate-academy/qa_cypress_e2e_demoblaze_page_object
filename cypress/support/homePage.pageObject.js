import PageObject from "./PageObject";

export class HomePage extends PageObject {
    url = '/';

    categoryList(category) {
        return cy.contains('.list-group-item', category);
    }

    product(name) {
        return cy.contains(name);
    }

    get addToCartButton() {
        return cy.contains('Add to cart');
    }

    clickaddToCartButton() {
        this.addToCartButton.click();
    }

    get linkCart() {
        return cy.contains('.nav-link', 'Cart');
    }

    clickLinkCart() {
        this.linkCart.click();
    }
}