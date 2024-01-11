/// <reference types='cypress' />
import HomeAndCataloguePageObject from "../support/pages/homeCatalogue.pageObject"
import PageObject from "../support/PageObject";
import PlaceOrderForm from "../support/pages/placeOrderForm.pageObject";


let user

const homePage = new HomeAndCataloguePageObject();
const pagObj = new PageObject();
const orderPage = new PlaceOrderForm();


describe('', () => {

  beforeEach(() => { 
    cy.task('createPlaceOrderUser').then(createPlaceOrderUser => {
      user = createPlaceOrderUser;
   });

  });

  it('should provide an ability to add product to the cart', () => {

    homePage.visit();    
    homePage.clickOnLink.click();
    homePage.clickOnCategory.click();
    homePage.clickOnProduct.click();
    cy.wait(2000);
    pagObj.assertAllert('Product added');

    homePage.clickOnCart.click();
    homePage.checkContainProduct.should('contain.text', 'Sony vaio i7');

  });


  it('should provide an ability to place an order', () => {

    homePage.visit();    
    homePage.clickOnLink.click();
    homePage.clickOnCategory.click();
    homePage.clickOnProduct.click();
    cy.wait(2000);
    pagObj.assertAllert('Product added');

    homePage.clickOnCart.click();

      orderPage.visit();
      orderPage.clickOnPlaceOrder.click()
      orderPage.fieldName.type(user.name);
      orderPage.fieldCountry.type(user.country);
      orderPage.fieldCity.type(user.city);
      orderPage.fieldCard.type(user.credit_card);
      orderPage.fieldMonth.type(user.month);
      orderPage.fieldYear.type(user.year);

      orderPage.clickOnPurchase();

      orderPage.popUpIsVisible.should('be.visible');
      orderPage.popUpContainText.should('contain.text', 'Thank you for your purchase!');

      orderPage.nameIsDisplayedOnPopUp.should('contain', user.credit_card);

      orderPage.clickOnOk.click({force: true});




  });
  
});
