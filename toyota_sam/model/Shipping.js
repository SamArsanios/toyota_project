class Shipping {
  constructor() {
    this.shippingHandling = null;
    this.chargePerPart = 0;
  }

  setShippingHandling(shipping) {
    this.shippingHandling = shipping;
  }

  getShippingHandling() {
    return this.shippingHandling;
  }

  setChargePerPart(chargeperpart) {
    this.chargePerPart = chargeperpart;
  }

  getChargePerPart() {
    return this.chargePerPart;
  }
}

module.exports = { Shipping };
