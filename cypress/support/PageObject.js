import PageObject from '../PageObject';

class CartPageObject extends PageObject {
assertProductInCart(productName) {
cy.get('.table-responsive')
.should('contain', productName);
}

clickOnPlaceOrderBtn() {
cy.contains('.btn', 'Place Order')
.click();
}

typeName(name) {
cy.get('#name')
.type(name);
}

typeCountry(country) {
cy.get('#country')
.type(country);
}

typeCity(city) {
cy.get('#city')
.type(city);
}

typeCreditCard(cardNumber) {
cy.get('#card')
.type(cardNumber);
}

typeMonth(month) {
cy.get('#month')
.type(month);
}

typeYear(year) {
cy.get('#year')
.type(year);
}

clickOnPurchaseBtn() {
cy.contains('.btn', 'Purchase')
.click();
}

assertDataInModal(cardNumber, firstName) {
cy.get('.sweet-alert')
.should('contain', `Card Number: ${cardNumber}`)
.and('contain', `Name: ${firstName}`);
}

clickOnOkBtn() {
cy.contains('.confirm.btn', 'OK')
.click();
}
}

export default CartPageObject;
