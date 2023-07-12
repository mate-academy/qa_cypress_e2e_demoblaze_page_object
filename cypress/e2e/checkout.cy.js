/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const contactForm = new ContactFormPageObject();
const productPage = new ProductPageObject(); // Створіть екземпляр ProductPageObject
const cartPage = new CartPageObject();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  amount: '790',
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: faker.date.future().getFullYear(),
};


describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should add a laptop to the cart and complete the checkout process', () => {
    // 2. Click on the "Laptops"
    homePage.clickOnLink('Laptops');

    // 3. Click on "Sony vaio i7"
    productPage.selectProduct('Sony vaio i7');

    // 4. Click on [Add to cart]
    productPage.clickAddToCart();
    
    //assert message in the alert 
    /*cy.get('.sweet-alert').scrollIntoView();
    cy.wait(2000);

    cy.get('.sweet-alert', { timeout: 5000 }).should('be.visible');

    cy.contains('.sweet-alert', 'Product added').should('be.visible');
    cy.contains('Ok').click(); // Клік на кнопку "Ok" для закриття вікна  */

    // 5. Click on "Cart"
    homePage.clickOnList('Cart');

    // assert the product is in the cart
    cartPage.assertProductInCart('Sony vaio i7');

    // 6. Click on [Place order]
    cartPage.clickPlaceOrder();

    // 7. Fill all fields
    contactForm.fillName(testData.name);
    contactForm.fillCountry(testData.country);
    contactForm.fillCity(testData.city);
    contactForm.fillCreditCard(testData.creditCard);
    contactForm.selectMonth(testData.month);
    contactForm.selectYear(testData.year);

    //8. Click on [Purchase]
    contactForm.clickPurchase();

    cy.wait(1000);

    //assert entered data is shown on modal
    contactForm.assertOrderData(testData);
    
    //9 .Click on [Ok]
    contactForm.clickOk();
  });
});
