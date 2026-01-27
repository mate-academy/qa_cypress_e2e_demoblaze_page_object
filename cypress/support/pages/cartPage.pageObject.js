import PageObject from '../PageObject';
// eslint-disable-next-line import/no-named-default
import { ArgumentError, isEveryKeyType } from '../helpFunctions';

class CartPagePageObject extends PageObject {
  url = '/cart.html';
  totalCost = 0;

  checkProductsInfo(expectedProductArray = []) {
    switch (true) {
      case !Array.isArray(expectedProductArray):
        throw new Error('"expectedProductArray" is not an Array');
      case expectedProductArray.length === 0:
        // eslint-disable-next-line max-len
        throw new Error('"expectedProductArray" must have at least one element');
      default:
        expectedProductArray.forEach((elem, i) => {
          const isPureObject =
            Object.prototype.toString.call(elem) === '[object Object]';

          if (!isPureObject) {
            throw new Error(`The ${i + 1} element of "expectedProductArray" is not an Object`);
          } else if (
            !elem.picture ||
            !elem.title ||
            !elem.price
          ) {
            throw new Error(`The ${i + 1} element of "expectedProductArray" ` +
              `doesn't have all properties (required: picture, title, price)`
            );
          }
        });
    }

    cy.get('table.table')
      .should(($loadingTable) => {
        const tableRows = Boolean($loadingTable[0].tBodies[0]?.rows.length);

        // eslint-disable-next-line no-unused-expressions
        expect(tableRows, 'Table content is built').to.be.true;
      })
      .then((table) => {
        const products = [...table[0].tBodies[0].rows];
        const productsInfo = (() => {
          const result = []; // [{ pictureAddress: @text, titleText: @text, priceText: @number }, ...]

          for (const product of products) {
            const [picture, title, price] = product.cells;
            const pictureAddress = picture.children[0].src;
            const titleText = title.textContent.replace(/[\r\n]+/g, '');
            const priceText = price.textContent.replace(/[\r\n]+/g, '');

            this.totalCost += Number(priceText);

            result.push({ pictureAddress, titleText, priceText });
          }

          return result;
        })();

        return productsInfo;
      })
      .then((productsOnPage) => {
        expect(productsOnPage.length, 'Product added to cart')
          .to.be.equal(expectedProductArray.length);

        productsOnPage.forEach((pageProduct, i) => {
          const { pictureAddress, titleText, priceText } = pageProduct;
          const { picture, title, price } = expectedProductArray[i];

          expect(pictureAddress, 'Img src').to.be.equal(picture);
          expect(titleText, 'Product name').to.be.equal(title);
          expect(priceText, 'Product price').to.be.equal(price);
        });
      });
  }

  clickPlaceOrderButton() {
    cy.get('button')
      .contains('Place Order')
      .click();
  }

  purchaseByClick() {
    cy.get('button')
      .contains('Purchase')
      .click();
  }

  assertFinalMessage({ name, card, total }) {
    const argumentType = Object.prototype.toString.call(arguments[0]);

    if (!(argumentType === '[object Object]')) {
      throw new ArgumentError('Function must be invoked with object');
    }

    const doHaveAllProperties = (() => {
      const hasName = !((name ?? false) === false);
      const hasCard = !((card ?? false) === false);
      const hasTotal = !((total ?? false) === false);

      return !(!hasName || !hasCard || !hasTotal);
    })();
    const doHaveOnlyStringProperty = isEveryKeyType('string',
      { ...arguments[0] });

    if (!doHaveAllProperties || Object.keys(arguments[0]).length > 3) {
      throw new ArgumentError(`Function must be invoked with object which ` +
          `has 3 property (name, card, total)`);
    } else if (!doHaveOnlyStringProperty) {
      throw new ArgumentError(`Function must be invoked with object which ` +
          `properties are only string`);
    }

    cy.get('.sweet-alert').as('purchaseEnd')
      .contains(`Amount: ${total}`);
    cy.get('@purchaseEnd')
      .contains(`Card Number: ${card}`);
    cy.get('@purchaseEnd')
      .contains(`Name: ${name}`);
    cy.get('.sweet-alert button')
      .contains('OK')
      .click();
  }

  insertUserDataToOrderProduct(userObj = {
    name: '',
    country: '',
    city: '',
    card: '',
    month: '',
    year: ''
  }) {
    const argumentType = Object.prototype.toString.call(userObj);
    const isPureObj = argumentType === '[object Object]';

    switch (true) {
      case !isPureObj:
        // eslint-disable-next-line max-len, quote-props
        throw new ArgumentError('"userObj" must be an Object', { 'userObj': argumentType });
      default:
        if (!(
          userObj.name &&
          userObj.country &&
          userObj.city &&
          userObj.card &&
          userObj.month &&
          userObj.year
        )) {
          throw new Error('"userObj" must have all properties filled ' +
            // eslint-disable-next-line max-len
            'with value (required: name, country, city, card, month, year)'
          );
        } else if (Object.keys(userObj).length > 6) {
          throw new Error(`"userObj" cannot have additional properties` +
            'userObj = { name, country, city, card, month, year }'
          );
        } else if (!isEveryKeyType('string', userObj)) {
          throw new Error('All value of "userObj" must be string');
        }
    }

    cy.get('#orderModal')
      .find('form')
      .should('be.visible')
      .then((form) => {
        const labelsToFill = [];

        for (const key in userObj) {
          labelsToFill.push(key);
        }

        for (const inputName of labelsToFill) {
          // eslint-disable-next-line cypress/unsafe-to-chain-command
          cy.get(`#${inputName}`)
            .click()
            .type(userObj[inputName]);
        }
      });
  }
}

export default CartPagePageObject;
