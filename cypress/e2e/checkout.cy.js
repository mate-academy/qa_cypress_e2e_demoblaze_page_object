import HomePage from '../support/pages/HomePage';
import CartPage from '../support/pages/CartPage';
import OrderPage from '../support/pages/OrderPage';
import faker from 'faker';

const homePage = new HomePage();
const cartPage = new CartPage();
const orderPage = new OrderPage();

describe('Demoblaze Checkout Flow', () => {
   beforeEach(() => {
       homePage.visit();
   });

   it('should add product to cart and complete the order', () => {
       homePage.clickLaptops();
       homePage.clickSonyVaio();
       homePage.addToCart();
       homePage.verifyAlert('Product added');
       homePage.goToCart();
       cartPage.verifyProductInCart('Sony vaio i7');
       cartPage.placeOrder();

       // Fill in order details
       const name = faker.name.findName();
       const country = faker.address.country();
       const city = faker.address.city();
       const card = faker.finance.creditCardNumber();
       const month = faker.date.month();
       const year = faker.date.past().getFullYear();

       orderPage.fillOrderDetails(name, country, city, card, month, year);
       orderPage.purchase();
       orderPage.verifyModalData(name, country, city, card, month, year);
       orderPage.clickOk();
   });
});
