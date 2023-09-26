import CheckoutFormObject from '../support/pages/checkoutForm.Object';
import HomeAndCataloguePageObject
  from '../support/pages/homeСatalogue.pageObject';
import faker from 'faker';
/// <reference types='cypress' />

const homePage = new HomeAndCataloguePageObject();
const checkoutForm = new CheckoutFormObject();

describe('Checkout', () => {
  before(() => {
    homePage.visit();
  });

  const category = 'Laptops';
  const product = 'Sony vaio i7';
  const alertMessage = 'Product added';
  const checkoutData = {
    name: faker.name.firstName(),
    country: faker.address.country(),
    city: faker.address.city(),
    creditCard: faker.finance.creditCardNumber(),
    month: faker.date.month(),
    year: faker.datatype.number({
      min: 2024,
      max: 2034
    })
  };

  const successMessage = 'Thank you for your purchase!';

  it('should provide an ability to checkout', () => {
    homePage.clickOnCategory(category);
    homePage.clickOnProduct(product);
    homePage.clickOnButton('Add to cart');
    homePage.assertAllert(alertMessage);
    homePage.clickOnLink('Cart');
    homePage.assertProductInCart(product);
    homePage.clickOnButton('Place Order');
    checkoutForm.typeName(checkoutData.name);
    checkoutForm.typeCountry(checkoutData.country);
    checkoutForm.typeCity(checkoutData.city);
    checkoutForm.typeCreditCard(checkoutData.creditCard);
    checkoutForm.typeMonth(checkoutData.month);
    checkoutForm.typeYear(checkoutData.year);
    checkoutForm.clickOnPurchaseBtn('Purchase');
    checkoutForm.assertSuccessPurchase(successMessage,
      checkoutData.creditCard,
      checkoutData.name);
    homePage.clickOnButton('OK');
  });
});
