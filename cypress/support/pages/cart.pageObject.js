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

    getById(id, fieldName) {
        cy.get(`[id="${id}"]`).type(fieldName);
    }
    
    get dataAfterPurchase() {
        return cy.get('.sweet-alert')
    }
    
    assertDataAfterPurchase(dataAboutUser) {
        this.dataAfterPurchase.should('contain', dataAboutUser)
    }
}

