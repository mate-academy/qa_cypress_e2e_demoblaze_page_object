import HomeAndCataloguePageObject
  from '../support/pages/homeCatalogue.pageObject';
import ProductDetailsPageObject
  from '../support/pages/productDetails.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import CheckoutPageObject from '../support/pages/checkout.pageObject';
import { faker } from '@faker-js/faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductDetailsPageObject();
const cartPage = new CartPageObject();
const checkoutPage = new CheckoutPageObject();

const testData = {
  productName: 'Sony vaio i7',
  category: 'Laptops',
  alertMessage: 'Product added',
  name: faker.person.fullName(),
  country: faker.location.country(),
  city: faker.location.city(),
  creditCard: faker.finance.creditCardNumber(),
  month: faker.date.month(),
  year: String(faker.number.int({ min: 2024, max: 2030 }))
};

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  it('should allow user to complete checkout process', () => {
    // Click on the "Laptops"
    homePage.clickOnCategory(testData.category);

    // Click on "Sony vaio i7"
    homePage.clickOnProduct(testData.productName);

    // Click on [Add to cart] and assert message in the alert
    productPage.clickOnAddToCart();
    productPage.assertAlert(testData.alertMessage);

    // Click on "Cart"
    homePage.clickOnLink('Cart');

    // Assert the product is in the cart
    cartPage.assertProductInCart(testData.productName);

    // Click on [Place order]
    cartPage.clickOnPlaceOrder();

    // Fill all fields
    checkoutPage.typeName(testData.name);
    checkoutPage.typeCountry(testData.country);
    checkoutPage.typeCity(testData.city);
    checkoutPage.typeCreditCard(testData.creditCard);
    checkoutPage.typeMonth(testData.month);
    checkoutPage.typeYear(testData.year);

    // Click on [Purchase]
    checkoutPage.clickOnPurchase();

    // Assert entered data is shown on modal
    checkoutPage.assertConfirmationData({
      name: testData.name,
      card: testData.creditCard
    });

    // Click on [Ok]
    checkoutPage.clickOnOk();
  });
});
