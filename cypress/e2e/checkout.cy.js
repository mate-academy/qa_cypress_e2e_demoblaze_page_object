
describe('Checkout Test', () => {
  it('should complete a purchase and verify order details', () => {
    // Дії для додавання продукту до кошика
    cy.visit('https://www.demoblaze.com/index.html');
    cy.contains('Laptops').click();
    cy.contains('Sony vaio i7').click();
    cy.contains('Add to cart').click();

    // Перевірка повідомлення
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
    });

    // Перехід до кошика
    cy.get('#cartur').click();

    // Перевірка, що продукт в кошику
    cy.get('tr').within(() => {
      cy.get('td').contains('Sony vaio i7').should('be.visible');
    });

    // Клік на "Place order"
    cy.contains('Place Order').click();

    // Заповнення форми замовлення
    cy.get('#name').type('mariana khrys'); // Ensure this matches the expected output
    cy.get('#country').type('Canada');
    cy.get('#city').type('Ottawa');
    cy.get('#card').type('1234455666778');
    cy.get('#month').type('April');
    cy.get('#year').type('2024');
    cy.contains('Purchase').click();

    // Перевірка, що модальне вікно містить правильні дані
    cy.get('.lead').should('contain.text', 'mariana khrys'); // Now matching the input
    cy.get('.lead').should('contain.text', '790 USD');
    cy.get('.lead').should('contain.text', '1234455666778');

    // Клік на "ОК" для завершення покупки
    cy.get('button.confirm.btn.btn-lg.btn-primary').click();
  });
});
