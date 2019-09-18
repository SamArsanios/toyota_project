class PartOrdered {
  constructor() {
    this.partNumber = 0;
    this.description = null;
    this.pricePerPart = 0;
    this.quantity = 0;
    this.overSizeContainer = false;
  }

  setPartNumber(partnumber) {
    this.partNumber = partnumber;
  }
  getPartNumber() {
    return this.partNumber;
  }

  setDescription(description) {
    this.description = description;
  }
  getDescription() {
    return this.description;
  }

  setPricePerPart(priceperpart) {
    this.pricePerPart = priceperpart;
  }
  getPricePerPart() {
    return this.pricePerPart;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }
  getQuantity() {
    return this.quantity;
  }

  setOverSizeContainer(oversizecontainer) {
    this.overSizeContainer = oversizecontainer;
  }
  getOverSizeContainer() {
    return this.overSizeContainer;
  }
}

module.exports = { PartOrdered };
