class Output {
  constructor() {
    this.Cost = 0;
    this.salesTax = 0;
    this.shippingAndHandling = 0;
    this.total = 0;
  }

  setCost(cost) {
    this.Cost = cost;
  }
  getCost() {
    return this.Cost;
  }

  setSalesTax(salestax) {
    this.salesTax = salestax;
  }
  getSalesTax() {
    return this.salesTax;
  }

  setShippingAndHandling(shippingandhandling) {
    this.shippingAndHandling = shippingandhandling;
  }
  getShippingAndHandling() {
    return this.shippingAndHandling;
  }

  setTotal(total) {
    this.total = total;
  }
  getTotal() {
    return this.total;
  }
}

module.exports = { Output };
