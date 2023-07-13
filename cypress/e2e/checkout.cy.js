/// <reference types='cypress' />

import HomeAndCataloguePageObject from '../support/pages/homeСatalogue.pageObject';
import ContactFormPageObject from '../support/pages/contactForm.pageObject';
import ProductPageObject from '../support/pages/product.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import faker from 'faker';

const homePage = new HomeAndCataloguePageObject();
const contactForm = new ContactFormPageObject();
const productPage = new ProductPageObject(); 
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


describe('Checkout of laptop purchasing flow', () => {
  before(() => {
    homePage.visit();
  });

  it('should add a laptop to the cart and complete the checkout process', () => {
    // 2. Click on the "Laptops"
    homePage.clickOnLink('Laptops');

    // 3. Click on "Sony vaio i7"
    homePage.selectProduct('Sony vaio i7');

    // 4. Click on [Add to cart]
    productPage.clickAddToCart();
    
    // 5. Click on "Cart"
    homePage.clickOnList('Cart');

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

    contactForm.assertOrderData(testData);
    
    //9 .Click on [Ok]
    contactForm.clickOk();
  });
});
