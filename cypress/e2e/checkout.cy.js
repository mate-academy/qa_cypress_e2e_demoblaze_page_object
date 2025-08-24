import HomeCataloguePage from '../support/pages/homeCatalogue.pageObject';

describe('Checkout flow - Demoblaze', () => {
  const homeCatalogue = new HomeCataloguePage();

  const product = 'Sony vaio i7';
  const orderData = {
    name: 'Jan Kowalski',
    country: 'Polska',
    city: 'Warszawa',
    card: '1234567890123456',
    month: '08',
    year: '2025'
  };

  it('should complete purchase using POM methods', () => {
    homeCatalogue.visit();

    homeCatalogue.selectCategory('Laptops');

    homeCatalogue.selectProduct(product);

    homeCatalogue.addToCart();
    homeCatalogue.assertAlert('Product added.');

    homeCatalogue.openCart();
    homeCatalogue.assertItemInCart(product);

    homeCatalogue.placeOrder();
    homeCatalogue.fillOrderForm(orderData);
    homeCatalogue.submitPurchase();

    homeCatalogue.assertConfirmationModalContains(orderData);
    homeCatalogue.confirmModal();
  });
});
