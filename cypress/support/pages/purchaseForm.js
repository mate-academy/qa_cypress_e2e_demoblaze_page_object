class PurchaseForm {
  getInput(id) {
    return cy.get(`input[id="${id}"]`);
  }
}

module.exports = {
  PurchaseForm
};
