import HomeAndCataloguePageObject from './homeСatalogue.pageObject';

class ProductPageObject extends HomeAndCataloguePageObject {
  constructor() {
    super();

    this.url = '/prod.html';
  }
}

export default ProductPageObject;
