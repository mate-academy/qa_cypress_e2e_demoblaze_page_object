import HomeAndCataloguePageObject from '../support/pages/homeCatalogue.pageObject';
import ProductPage from '../support/pages/productPage';
import CartPage from '../support/pages/cartPage';
import OrderModal from '../support/pages/orderModal';
import { faker } from '@faker-js/faker';

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPage();
const cartPage = new CartPage();
const orderModal = new OrderModal();

const testData = {
  name: faker.name.firstName(),
  country: faker.address.country(),
  city: faker.address.city(),
  card: faker.finance.creditCardNumber(),
  month: faker.datatype.number({ min: 1, max: 12 }).toString(),
  year: faker.datatype.number({ min: 2024, max: 2030 }).toString()
};

describe('Checkout flow', () => {
  it('should complete a purchase of Sony vaio i7', () => {
    homePage.visit();
    homePage.clickOnCategory('Laptops');
    homePage.clickOnProduct('Sony vaio i7');

    productPage.addToCart();

    cartPage.open();
    cartPage.assertProductPresent('Sony vaio i7');
    cartPage.placeOrder();

    orderModal.fillForm(testData);
    orderModal.purchase();
    orderModal.assertConfirmation(testData);
    orderModal.confirm();
  });
});
