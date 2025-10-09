import HomeAndCataloguePageObject from "../support/pages/homeCatalogue.pageObject";
import ProductPage from "../support/pages/productPage";
import CartPage from "../support/pages/cartPage";
import OrderModal from "../support/pages/orderModal";

const homePage = new HomeAndCataloguePageObject();
const productPage = new ProductPage();
const cartPage = new CartPage();
const orderModal = new OrderModal();

const orderData = {
  name: "John Doe",
  country: "USA",
  city: "New York",
  card: "1234567890123456",
  month: "12",
  year: "2025",
};

describe("Demoblaze purchase flow", () => {
  before(() => {
    homePage.visit();
  });

  it("should purchase a Sony vaio i7", () => {
    homePage.clickOnCategory("Laptops");
    homePage.clickOnProduct("Sony vaio i7");

    productPage.addToCart();

    cartPage.open();
    cartPage.assertProductPresent("Sony vaio i7");
    cartPage.placeOrder();

    orderModal.fillForm(orderData);
    orderModal.purchase();
    orderModal.assertConfirmation(orderData);
    orderModal.confirm();
  });
});
