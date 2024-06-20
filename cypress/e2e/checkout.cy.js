/// <reference types='cypress' />
import HomeAndCataloguePageObject from "../support/pages/homeCatalogue.pageObject"
import PageObject from "../support/PageObject";
import PlaceOrderForm from "../support/pages/placeOrderForm.pageObject";


let user

const homePage = new HomeAndCataloguePageObject();
const pagObj = new PageObject();
const orderPage = new PlaceOrderForm();


describe('Product', () => {

  beforeEach(() => { 
    cy.task('createPlaceOrderUser').then(createPlaceOrderUser => {
      user = createPlaceOrderUser;
   });

  });

  it('should provide an ability to add product to the cart', () => {

    homePage.visit();    
    homePage.clickOnLink('Laptops');
    homePage.clickOnCategory('Sony vaio i7');
    homePage.clickOnProduct('Add to cart');
    cy.wait(2000);
    homePage.assertAllert('Product added');

    homePage.clickOnCart('cart');
    homePage.checkContainProduct('Sony vaio i7');

  });


  it('should provide an ability to place an order', () => {

    homePage.visit();    
    homePage.clickOnLink('Laptops');
    homePage.clickOnCategory('Sony vaio i7');
    homePage.clickOnProduct('Add to cart');
    homePage.clickOnCart('cart');

      orderPage.visit();
      orderPage.clickOnPlaceOrder('Place Order');
      orderPage.typeFieldName(user.name);
      orderPage.typeFieldCountry(user.country);
      orderPage.typeFieldCity(user.city);
      orderPage.typeFieldCard(user.credit_card);
      orderPage.typeFieldMonth(user.month);
      orderPage.typeFieldYear(user.year);

      orderPage.clickOnPurchase();

      orderPage.popUpIsVisible;
      orderPage.popUpContainText('Thank you for your purchase!');

      orderPage.nameIsDisplayedOnPopUp(user.name);
      orderPage.numberOfCardIsDisplayedOnPopUp(user.credit_card);

      orderPage.clickOnOk




  });
  
});
