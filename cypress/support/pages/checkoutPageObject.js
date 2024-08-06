import PageObject from "../PageObject";

class CheckoutPageObject extends PageObject {
    url = '/cart.html';
    assertProductAdded(product) {
      cy.get('.table-responsive').should('contain', product);
    }
     
    fillNameField(name) {
      cy.get('#name').type(name);
    }

    clickOrderModal(orderButton) {
        cy.get('#btn btn-success').click()
    }
    
    fillCountryField(country) {
        cy.get('#country').type(country)
    }

    fillCityField(city) {
        cy.get('#city').type(city)
    }

    fillCreditCardField(card) {
        cy.get('#card').type(card)
    }

    fillMonthField(month) {
        cy.get('#month').type(month)
    }

    fillYearField(year) {
        cy.get('#year').type(year)
    }

    clickPurchaseBtn(btn) {
        cy.get('#btn btn-primary').click(btn)
    }

    clickOnConfirmBtn(confirmBtn) {
        cy.get('#confirm btn btn-lg btn-primary').click();
    }


}

export default CheckoutPageObject;