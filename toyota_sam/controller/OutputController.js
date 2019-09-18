const OutputModel = require("../model/Output");

class OutputController {
  static getOutput(output) {
    let theOutput = new OutputModel.Output();
    theOutput.setCost(output.cost);
    theOutput.setSalesTax(output.salestax);
    theOutput.setShippingAndHandling(output.shippingandhandling);
    theOutput.setTotal(output.total);

    return theOutput;
  }
}

module.exports = { OutputController };
