class OrderPage {
    fillOrderDetails(name, country, city, card, month, year) {
        cy.get('input[name="name"]').type(name);
        cy.get('input[name="country"]').type(country);
        cy.get('input[name="city"]').type(city);
        cy.get('input[name="card"]').type(card);
        cy.get('input[name="month"]').type(month);
        cy.get('input[name="year"]').type(year);
    }
    purchase() {
        cy.contains('Purchase').click();
    }
    verifyModalData(name, country, city, card, month, year) {
        cy.get('.sweet-alert').should('contain', name);
        cy.get('.sweet-alert').should('contain', country);
        cy.get('.sweet-alert').should('contain', city);
        cy.get('.sweet-alert').should('contain', card);
        cy.get('.sweet-alert').should('contain', month);
        cy.get('.sweet-alert').should('contain', year);
    }
    clickOk() {
        cy.contains('OK').click();
    }
}
export default OrderPage;
