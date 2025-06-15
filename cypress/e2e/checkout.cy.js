/// <reference types="cypress" />

// eslint-disable-next-line max-len
import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPageObject();
const cartPage = new CartPageObject();

describe('Checkout Flow Test - Demoblaze', () => {
  before(() => {
    cy.visit(homePage.url);
  });

  it('Should complete the checkout process', () => {
    // 1. Click on category "Laptops"
    homePage.clickOnCategory('Laptops');

    // 2. Click on product "Sony vaio i7"
    homePage.clickOnProduct('Sony vaio i7');

    // 3. Click "Add to cart"
    productPage.clickAddToCart();

    // 4. Assert alert message
    productPage.verifyAlertMessage('Product added');

    // 5. Go to Cart
    homePage.clickOnLink('Cart');

    // 6. Verify product is in cart
    cartPage.verifyProductInCart('Sony vaio i7');

    // 7. Click on Place Order
    cartPage.clickPlaceOrder();

    // 8. Fill the order form
    const testUser = {
      name: 'Ім’я',
      country: 'Україна',
      city: 'Київ',
      card: '1234567890123456',
      month: '06',
      year: '2025'
    };
    cartPage.fillForm(testUser);

    // 9. Click on Purchase
    cartPage.clickPurchase();

    // 10. Assert modal has entered data
    cartPage.verifyModalContains({
      name: testUser.name,
      card: testUser.card
    });

    // 11. Click OK
    cartPage.clickOk();
  });
});
