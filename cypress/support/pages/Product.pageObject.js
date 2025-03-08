
import PageObject from '../PageObject';

class  ProductPageObject extends PageObject {
    clickOnAddBtn() {
        cy.contains('.btn btn-success btn-lg', 'Add to cart').click();
    }

    verifyAlert() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added');
        });
    }
}

export default  ProductPageObject;
