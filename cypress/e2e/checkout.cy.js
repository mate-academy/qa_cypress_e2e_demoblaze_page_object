/// <reference types='cypress' />

    import homePage from '../support/pages/homePage';
    import laptopsPage from '../support/pages/laptopsPage';
    import productPage from '../support/pages/productPage';
    import cartPage from '../support/pages/cartPage';
    import orderPage from '../support/pages/orderPage';
    import faker from 'faker';

    const userData = {
      name: faker.name.firstName(),
      country: faker.address.country(),
      city: faker.address.city(),
      creditCard: faker.finance.creditCardNumber(),
      month: faker.date.month(),
      year: faker.random.number({ min: 2023, max: 2028 }),
    };
    
    describe('DemoBlaze Automation', () => {
      it('should add product to the cart and place order', () => {
        homePage.visit();
        homePage.clickLaptopsCategory();
        laptopsPage.clickOnSonyVaioi7();
        productPage.addToCart();
        homePage.GoToCart();
        cartPage.assertproductInCart('Sony vaio i7');
        cartPage.clickPlaceOrder();
        orderPage.fillOrderForm(
          userData.name,
          userData.country,
          userData.city,
          userData.creditCard,
          userData.month,
          userData.year
        );
        orderPage.clickPurchase();
        orderPage.assertOrderDetails(
          userData.name,
          userData.creditCard
        );
        orderPage.clickOK();
      });
    });