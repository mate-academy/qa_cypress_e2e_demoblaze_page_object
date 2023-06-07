import PageObject from '../PageObject';

class ProductPageObject extends PageObject {
    url = '/prod.html?idp_=9';

    clickOnAddBtn() {
        cy.get('[onclick="addToCart(9)"]')
            .click();
    }
}

export default ProductPageObject;