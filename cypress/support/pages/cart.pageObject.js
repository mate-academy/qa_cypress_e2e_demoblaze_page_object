import PageObject from '../PageObject';

class cartPageObject extends PageObject {
    url = '/cart.html'

    get fillName() {
        return cy.get('#name').type('Porter')
    }
    get fillCountry() {
        return cy.get('#country').type('Poland')
    }
    get fillCity() {
        return cy.get('#city').type('Warsaw')
    }
    get fillCreditCart() {
        return cy.get('#card').type('6759-3041-3009-3905')
    }
    get fillMonth() {
        return cy.get('#month').type('February')
    }
    get fillYear() {
        return cy.get('#year').type('1999')
    }
    get purchaseBtn() {
        return cy.contains('Purchase').click()
    }
        get okBtn() {
            return cy.contains('OK').click()
    }
}

export default cartPageObject