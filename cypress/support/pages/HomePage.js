class HomePage {
    visit() {
        cy.visit('https://demoblaze.com/index.html');
    }
    clickLaptops() {
        cy.contains('Laptops').click();
    }
    clickSonyVaio() {
        cy.contains('Sony vaio i7').click();
    }
    addToCart() {
        cy.get('a.add-to-cart').click();
    }
    verifyAlert(message) {
        cy.on('window:alert', (msg) => {
            expect(msg).to.eq(message);
        });
    }
    goToCart() {
        cy.contains('Cart').click();
    }
}
export default HomePage;