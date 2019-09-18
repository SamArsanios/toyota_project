class CustomerInfo {
  constructor() {
    this.customerId = null;
    this.customerName = null;
    this.townCode = null;
    this.retailCustomer = false;
  }
  //setting the customer ID
  setCustomerId(id) {
    this.customerId = id;
  }
  //getting the Customer ID
  getCustomerId() {
    return this.customerId;
  }

  //setting the customer Name
  setCustomerName(name) {
    this.customerName = name;
  }
  //getting the Customer Name
  getCustomerName() {
    return this.customerName;
  }

  //setting the customer ID
  setTownCode(towncode) {
    this.townCode = towncode;
  }
  //getting the Customer ID
  getTownCode() {
    return this.townCode;
  }

  //setting the customer ID
  setRetailCustomer(retailcustomer) {
    this.retailCustomer = retailcustomer;
  }
  //getting the Customer ID
  isRetailCustomer() {
    return this.retailCustomer;
  }
}

module.exports = { CustomerInfo };
