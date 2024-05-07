import cartPageObject from '../support/pages/cart.pageObject';
import HomeAndCatalogue from '../support/pages/homeСatalogue.pageObject';
  import faker from 'faker';
import productDescription from '../support/pages/productDescription.pageObject';
///<reference types='cypress' />
 const homePage = new HomeAndCatalogue(); 
 const cartPage = new cartPageObject();
 const productDescriptionPage = new productDescription();
 const testData = {
  productName: 'Sony vaio i7',
  alertCartMessage: 'Product added',
  modalText: 'Thank you for your purchase!',
  categoryName: 'Laptops',
  cartLink: 'Cart',
  name: faker.name.findName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.random.alphaNumeric(16),
  month: faker.date.month(),
  year: faker.random.number({ min: 2023, max: 2030 })
};
describe('Checkout', () => {
    before(() => {
      homePage.visit();
    });
  });

  it('should provide an ability to place order', () => {
    homePage.visit();
    homePage.clickOnCategory(testData.categoryName);
    homePage.checkUrlEndPoint('index.html');
    homePage.clickOnProduct(testData.productName);
    productDescriptionPage.clickOnButton('Add to cart');
    cy.wait(4000);
    productDescriptionPage.assertAllert(testData.alertCartMessage);

    productDescriptionPage.clickOnLink(testData.cartLink);
    cartPage.checkUrlEndPoint('cart.html');
    cartPage.checkProductExistingInCart(testData.productName);
    cartPage.clickOnButton('Place Order');

    cartPage.fillNameField(testData.name);
    cartPage.fillCountryField(testData.country);
    cartPage.fillCityField(testData.city);
    cartPage.fillCreditCardField(testData.card);
    cartPage.fillMonthField(testData.month);
    cartPage.fillYearField(testData.year);
    cartPage.clickOnButton('Purchase');
    cartPage.assertModal(testData.modalText);
    cartPage.assertCardInModal(testData.card);
    cartPage.assertNameInModal(testData.name);
    cartPage.clickOnButton('OK');
  });
