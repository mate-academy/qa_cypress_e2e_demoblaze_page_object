import PageObject from "../PageObject"

export class CartPage extends PageObject {
    url = '/index.html';

    get placeOrderBtn() {
        return cy.get('.btn.btn-success')
    }
      
    clickOnPlaceOrderBtn() {
        this.placeOrderBtn.click();
    }

    get purchaseBtn() {
        return cy.get('[onclick="purchaseOrder()"]')
    }
      
    clickOnPurchaseBtn() {
        this.purchaseBtn.click()
    }

    get okAfterPurchaseBtn() {
        return cy.get('.confirm')
    }
      
    clickOnOkAfterPurchaseBtn() {
          this.okAfterPurchaseBtn.click()
    }

    get productInCart() {
        return cy.get('td')
    } 

    assertProductInCart(product) {
        this.productInCart.should('contain', product);
    }

    get nameField() {
        return cy.get('#name')
    }

    typeName(name) {
        this.nameField.type(name)
    }

    get countryField() {
        return cy.get('#country')
    }

    typeCountry(country) {
        this.countryField.type(country)
    }

    get cityField() {
        return cy.get('#city')
    }

    typeCity(city) {
        this.cityField.type(city)
    }

    get creditCardField() {
        return cy.get('#card')
    }

    typeCreditCard(card) {
        this.creditCardField.type(card)
    }

    get monthField() {
        return cy.get('#month')
    }

    typeMonth(month) {
        this.monthField.type(month)
    }

    get yearField() {
        return cy.get('#year')
    }

    typeYear(year) {
        this.yearField.type(year)
    }
    
    get dataAfterPurchase() {
        return cy.get('.sweet-alert')
    }
    
    assertDataAfterPurchase(dataAboutUser) {
        this.dataAfterPurchase.should('contain', dataAboutUser)
    }
}

