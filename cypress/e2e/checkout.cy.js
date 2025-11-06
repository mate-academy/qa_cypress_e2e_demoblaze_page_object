import { HomeCataloguePage } from '../support/pages/homeCatalogue.pageObject';
import { PageObject } from '../support/PageObject'; // jeśli Twój bazowy obiekt jest używany
// Niektóre projekty nie mają tego dziedziczenia, ale import nie zaszkodzi.

class ProductPage extends PageObject {
  addToCart() {
    cy.contains('Add to cart').click();
  }

  verifyAddToCartAlert() {
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Product added');
    });
  }

  goToCart() {
    cy.get('#cartur').click();
  }
}

class CartPage extends PageObject {
  verifyProductInCart(productName) {
    cy.get('.success').should('contain.text', productName);
  }

  clickPlaceOrder() {
    cy.contains('Place Order').click();
  }
}

class OrderModalPage extends PageObject {
  fillForm({ name, country, city, card, month, year }) {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  clickPurchase() {
    cy.contains('Purchase').click();
  }

  verifyPurchaseDetails(name, card) {
    cy.get('.sweet-alert').should('contain.text', name);
    cy.get('.sweet-alert').should('contain.text', card);
  }

  clickOk() {
    cy.contains('OK').click();
  }
}

describe('Demoblaze Checkout Flow', () => {
  const homeCataloguePage = new HomeCataloguePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();
  const orderModalPage = new OrderModalPage();

  it('should complete checkout successfully', () => {
    // 1. Visit homepage
    homeCataloguePage.visit('https://www.demoblaze.com/');

    // 2. Click on "Laptops"
    homeCataloguePage.clickLaptopsCategory();

    // 3. Select "Sony vaio i7"
    homeCataloguePage.selectProduct('Sony vaio i7');

    // 4. Add to cart + assert alert
    productPage.addToCart();
    productPage.verifyAddToCartAlert();

    // 5. Go to cart and verify product
    productPage.goToCart();
    cartPage.verifyProductInCart('Sony vaio i7');

    // 6. Click on Place Order
    cartPage.clickPlaceOrder();

    // 7. Fill all fields
    orderModalPage.fillForm({
      name: 'John Doe',
      country: 'Poland',
      city: 'Warsaw',
      card: '1234567890123456',
      month: '11',
      year: '2025'
    });

    // 8. Click Purchase + assert data
    orderModalPage.clickPurchase();
    orderModalPage.verifyPurchaseDetails('John Doe', '1234567890123456');

    // 9. Click OK
    orderModalPage.clickOk();
  });
});
