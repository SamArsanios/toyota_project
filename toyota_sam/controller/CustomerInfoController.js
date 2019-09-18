const customerInfoModel = require("../model/CustomerInfo");

class CustomerInfoController {
  static getCustomerInfo(customer) {
    let theCustomerInfo = new customerInfoModel.CustomerInfo();
    theCustomerInfo.setCustomerId(customer.id);
    theCustomerInfo.setCustomerName(customer.name);
    theCustomerInfo.setTownCode(customer.towncode);
    theCustomerInfo.setRetailCustomer(customer.retailcustomer);

    return theCustomerInfo;
  }
}

module.exports = { CustomerInfoController };
