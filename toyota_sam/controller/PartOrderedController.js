const PartOrderedModel = require("../model/PartOrdered");

class PartOrderedController {
  static getPartOrdered(partordered) {
    let thePartOrdered = new PartOrderedModel.PartOrdered();
    thePartOrdered.setPartNumber(partordered.partnumber);
    thePartOrdered.setDescription(partordered.description);
    thePartOrdered.setPricePerPart(partordered.priceperpart);
    thePartOrdered.setQuantity(partordered.quantity);
    thePartOrdered.setOverSizeContainer(partordered.oversizecontainer);

    return thePartOrdered;
  }
}

module.exports = { PartOrderedController };
