const shippingModel = require("../model/Shipping");

class ShippingController {
  static getShipping(shipping) {
    let theShipping = new shippingModel.Shipping();
    theShipping.setShippingHandling(shipping.shipping);
    theShipping.setChargePerPart(shipping.chargeperpart);
    
    return theShipping;
  }
}

module.exports = { ShippingController };
