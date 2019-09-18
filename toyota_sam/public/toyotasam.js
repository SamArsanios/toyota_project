const validModel = require("./Validated");
const validatedObj = new validModel.Validated();

const validate = () => {
  const form = document.getElementById("main-form");

  const customerId = document.getElementById("customerId");
  const customerName = document.getElementById("customerName");
  //    townCode = document.getElementById('townCode');
  const partNumber = document.getElementById("partNumber");
  const description = document.getElementById("description");
  const price = document.getElementById("pricePerPart");
  const quantity = document.getElementById("quantity");
  const warningMessage = document.getElementsByClassName("warningMessage");

  const borderColour = (theField, theStyle) => {
    theField.style.border = theStyle;
  };

  let regexCustomerId = /\s/;

  if (
    regexCustomerId.test(customerId.value) == true ||
    customerId.value == ""
  ) {
    borderColour(customerId, "1px solid red");
    warningMessage[0].innerHTML =
      "Can not be empty and can not contain empty spaces.";
    warningMessage[0].style = "color: red; font-family: Helvetica, sans-serif;";
    validatedObj.setValid(false);
    return false;
  } else {
    borderColour(customerId, "1px solid rgb(122, 122, 139)");
    warningMessage[0].innerHTML = "";
    validatedObj.setValid(true);
  }
  //validating Customer Name
  if (customerName.value == "") {
    borderColour(customerName, "1px solid red");
    warningMessage[1].innerHTML = "Customer name can not be empty.";
    warningMessage[1].style = "color: red; font-family: Helvetica, sans-serif;";
    validatedObj.setValid(false);
    return false;
  } else {
    borderColour(customerName, "1px solid rgb(122, 122, 139)");
    warningMessage[1].innerHTML = "";
    validatedObj.setValid(true);
  }
  //validating Town Code
  if (townCode.value == "") {
    borderColour(townCode, "1px solid red");
    warningMessage[2].innerHTML = "Only 3 characters allowed.";
    warningMessage[2].style = "color: red; font-family: Helvetica, sans-serif;";
    validatedObj.setValid(false);
    return false;
  } else {
    borderColour(townCode, "1px solid rgb(122, 122, 139)");
    warningMessage[2].innerHTML = "";
    validatedObj.setValid(true);
  }

  //validating Part Number
  if (partNumber.value == "") {
    borderColour(partNumber, "1px solid red");
    warningMessage[3].innerHTML = "Part Number can not be empty.";
    warningMessage[3].style = "color: red; font-family: Helvetica, sans-serif;";
    validatedObj.setValid(false);
    return false;
  } else {
    borderColour(partNumber, "1px solid rgb(122, 122, 139)");
    warningMessage[3].innerHTML = "";
    validatedObj.setValid(true);
  }

  //validating price
  if (description.value <= 0) {
    borderColour(description, "1px solid red");
    warningMessage[4].innerHTML = "Description can not be empty.";
    warningMessage[4].style = "color: red; font-family: Helvetica, sans-serif;";
    validatedObj.setValid(false);
    return false;
  } else {
    borderColour(description, "1px solid rgb(122, 122, 139)");
    warningMessage[4].innerHTML = "";
    validatedObj.setValid(true);
  }

  //validating price
  if (price.value <= 0) {
    borderColour(price, "1px solid red");
    warningMessage[5].innerHTML =
      "Price can not be empty and must be greater than 0.";
    warningMessage[5].style = "color: red; font-family: Helvetica, sans-serif;";
    validatedObj.setValid(false);
    return false;
  } else {
    borderColour(price, "1px solid rgb(122, 122, 139)");
    warningMessage[5].innerHTML = "";
    validatedObj.setValid(true);
  }

  if (quantity.value <= 0) {
    borderColour(quantity, "1px solid red");
    warningMessage[6].innerHTML =
      "Quantity can not be empty and must be greater than 0.";
    warningMessage[6].style = "color: red; font-family: Helvetica, sans-serif;";
    validatedObj.setValid(false);
    return false;
  } else {
    borderColour(quantity, "1px solid rgb(122, 122, 139)");
    warningMessage[6].innerHTML = "";
    validatedObj.setValid(true);
  }

  return validatedObj.getValid();
};

module.exports = {
  validate
};

const exit = document.getElementById("btn-exit");
const form = document.getElementById("main-form");
exit.addEventListener("click", e => {
  document.write("");
});

const clearInputs = () => {
  document.getElementById("new-order").addEventListener("click", event => {
    // let fields = document.getElementsByTagName("input");
    // for (let i = 0; fields.length; i++) {
    //   if (fields[i].type == "text") {
    //     fields[i].value == "";
    //   }
    // }
    form.reset();
    for (
      let i = 0;
      i < document.getElementsByClassName("theOutputs").length;
      i++
    ) {
      document.getElementsByClassName("theOutputs")[i].innerHTML = "";
    }
  });
};

clearInputs();

// validate();
//code for computing

// compute.addEventListener("click", event => {
//   const compute = document.getElementById("compute");
//   const cost = document.getElementById("cost");
//   const salesTax = document.getElementById("salesTax");
//   const shippingOutput = document.getElementById("shipping");
//   const total = document.getElementById("total");

//   let computeCost = function() {
//     //get unit price
//     //			var unitPrice = Number(document.getElementById("unit-price").value);

//     //oversize checkbox checked
//     let containerOverSize = document.getElementById("oversize");
//     //get cost element
//     //				costEl = document.getElementById('cost');

//     if (containerOverSize.checked) {
//       //increment the unitprice by 5
//       price.value += 5;
//       cost.innerHTML = price.value * quantity.value;
//       //display cost in browser
//       //				cost.innerHTML = "$ " + cost.toFixed(2);
//       return parseFloat(cost.value);
//     } else {
//       //compute cost
//       cost.innerHTML = quantity.value * price.value;
//       cost.style = "text-align: right;";
//       //display cost in browser
//       //				cost.innerHTML = "$ " + cost.toFixed(2);
//       return parseFloat(cost.value);
//       console.log(cost);
//     }
//   };
//   /////////////////////////////////////////////////////////////////////////////////

//   let salesTaxes = function() {
//     const retailCustomer = document.getElementById("retailId").checked;
//     const townCode = document.getElementById("townCode");

//     if (retailCustomer) {
//       switch (townCode.value) {
//         case "KAM": {
//           let salesTaxi = ((cost.value * 10) / 100).toFixed(2);
//           salesTax.innerHTML = "$ " + salesTaxi.value;
//           console.log("cost = " + cost.value);
//           console.log("tax = " + salesTaxi.value);
//           return salesTaxi.value;
//           break;
//         }
//         case "EBB":
//         case "MBR": {
//           let salesTaxi = ((cost.value * 5) / 100).toFixed(2);
//           salesTax.innerHTML = "$ " + salesTaxi.value;
//           console.log("cost = " + cost);
//           console.log("tax = " + salesTaxi);
//           return salesTaxi.value;
//           break;
//         }
//         default:
//       }
//     } else {
//       salesTax.value = 1;
//       salesTax.innerHTML = "#" + salesTax.value.toFixed(2);
//       console.log("cost = " + cost);
//       console.log("tax = " + salesTax);
//       return salesTax.value;
//     }
//   };
//   //    <select id="city" class="form-control">
//   //								<option value="KLA" selected id="kampala">Kampala</option>
//   //								<option value="EBB" id="entebbe">Entebbe</option>
//   //								<option value="MBR" id="mbarara">Mbarara</option>
//   //								<option value="OTH" id="other">Other</option>
//   //							</select>
//   ////////////////////////////////////////////////////////////////////////////////

//   function shipping() {
//     //shipAndHandle fees
//     let shippingOutput = document.getElementById("shipping");
//     let shippingCharge;

//     //get shipping methods
//     let shippingWays = document.getElementsByName("shippingWays");
//     let shipCalculate;

//     for (let i = 0; i < shippingWays.length; i++) {
//       if (shippingWays[i].checked) {
//         //get value of checked box
//         switch (shippingWays[i].value) {
//           case "UPS": {
//             shippingCharge = 7;
//             shipCalculate = quantity * shipping;
//             shippingOutput.innerHTML = "$$ " + shipCalculate.toFixed(2);
//             return shipCalculate.toFixed(2);
//             console.log(shipCalculate);
//             break;
//           }

//           case "FEDEX_GROUND": {
//             shippingCharge = 9.25;
//             shipCalculate = quantity * shipping;
//             shippingOutput.innerHTML = "$ " + shipCalculate.toFixed(2);
//             return shipCalculate.toFixed(2);
//             console.log(shipCalculate);
//             break;
//           }
//           case "USPOSTAL": {
//             shippingCharge = 8.5;
//             shipCalculate = quantity * shipping;
//             shippingOutput.innerHTML = "$ " + shipCalculate.toFixed(2);
//             return shipCalculate.toFixed(2);
//             console.log(shipCalculate);
//             break;
//           }

//           case "FEDEX_AIR": {
//             shippingCharge = 12.0;
//             shipCalculate = quantity * shipping;
//             shippingOutput.innerHTML = "$ " + shipCalculate;
//             return shipCalculate;
//             console.log(shipCalculate);
//             break;
//           }
//         }
//       }
//     }
//   }
//   //    total.innerHTML = cost.value + salesTax.value + shipping.value;

//   // computeCost();
//   // salesTaxes();
//   // shipping();
// });
