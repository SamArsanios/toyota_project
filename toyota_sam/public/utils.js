const axios = require("axios");

const valid = require("./toyotasam");

const sweetone = require("sweetalert");

const getValueById = id => {
  return document.getElementById(id).value;
};

const getElById = id => {
  return document.getElementById(id);
};

/**
 * get customer info
 */
const customerInfo = () => {
  const customerId = getValueById("customerId");
  const customerName = getValueById("customerName");
  const townCode = getValueById("townCode");
  const retailId = getElById("retailId");
  let isRetail = false;

  if (retailId.checked) {
    isRetail = true;
  } else {
    isRetail = false;
  }
  console.log("broswerify", isRetail);
  const obj = {
    id: customerId,
    name: customerName,
    townCode: townCode,
    retailCustomer: isRetail
  };
  return obj;
};

/**
 * get part ordered
 */
const partOrdered = () => {
  const partNumber = getValueById("partNumber");
  const description = getValueById("description");
  const pricePerPart = getValueById("pricePerPart");
  const quantity = getValueById("quantity");
  const overSizeEl = getElById("oversize");

  let isOverSize = false;

  if (overSizeEl.checked) {
    isOverSize = true;
  } else {
    isOverSize = false;
  }

  const obj = {
    partNumber: partNumber,
    description: description,
    pricePerPart: pricePerPart,
    quantity: quantity,
    overSizeContainer: isOverSize
  };
  return obj;
};

/**
 * get shipping
 */
const shipping = () => {
  console.log("in here...");
  console.log(document.querySelector('input[name="ship"]:checked').value);

  const shippingMethod = document.querySelector('input[name="ship"]:checked')
    .value;

  let shippingCharge = 0;
  if (shippingMethod == "UPS") {
    shippingCharge = 7;
  }

  if (shippingMethod == "Fed EX Ground") {
    shippingCharge = 9.25;
  }

  if (shippingMethod == "Fed Ex Ground Air") {
    shippingCharge = 12;
  }

  if (shippingMethod == "US Postal Air") {
    shippingCharge = 8.5;
  }

  let shippingAndHandling = {
    shippingMethod: shippingMethod,
    chargePerPart: shippingCharge
  };

  return shippingAndHandling;
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const test = () => {
  // call validation
  const valdationDone = valid.validate();

  if (valdationDone == true) {
    console.log("done");
  } else {
    console.log("fooled");
  }

  // console.log("++++++++++++++++++++++");

  const costEl = getElById("cost");
  const salesTax = getElById("salesTax");
  const shippingEl = getElById("shipping");
  const totalEl = getElById("total");

  let cost = pricePerPart.value * quantity.value;
  costEl.innerHTML = "$ " + cost.toFixed(2);

  /////////////////////////////////////////////////////////////////////////////////
  // salesTax.innerHTML = 0.1 * pricePerPart.value * quantity.value;
  // const cost = document.getElementById("cost");

  let shippings = shipping().chargePerPart * quantity.value;
  shippingEl.innerHTML = shippings.toFixed(2);
  console.log(`ship`, shipping());

  console.log(`shipping`, shipping().chargePerPart * quantity.value);

  let total = cost + shipping().chargePerPart * quantity.value + salesTax.value;
  console.log("totalo", total);

  // console.log("retailo", customerInfo().retailCustomer);
  if (customerInfo().retailCustomer) {
    switch (customerInfo().townCode) {
      case "KAM": {
        if (partOrdered().overSizeContainer) {
          let extraShipping = 5;
          shippingEl.innerHTML =
            (extraShipping + shipping().chargePerPart) * quantity.value;
          let salesTaxi = 0.1 * pricePerPart.value * quantity.value;
          salesTax.innerHTML = "$ " + salesTaxi.toFixed(2);

          totalEl.innerHTML =
            cost +
            salesTaxi +
            (extraShipping + shipping().chargePerPart) * quantity.value;

          console.log("Habibi", extraShipping + shipping().chargePerPart);
        } else {
          let salesTaxi = 0.1 * pricePerPart.value * quantity.value;
          salesTax.innerHTML = "$ " + salesTaxi.toFixed(2);
          console.log("tax", salesTaxi);
          totalEl.innerHTML =
            cost + salesTaxi + shipping().chargePerPart * quantity.value;
        }
        // console.log(`tot`, total);
        // return salesTaxi.value;
        // console.log(townCode.value);
        // console.log("tax = " + salesTaxi);
        // console.log("cost = " + cost.value);
        break;
      }
      case "EBB":
        {
          if (partOrdered().overSizeContainer) {
            let extraShipping = 5;
            shippingEl.innerHTML =
              (extraShipping + shipping().chargePerPart) * quantity.value;
            let salesTaxi = 0.05 * pricePerPart.value * quantity.value;
            salesTax.innerHTML = "$ " + salesTaxi.toFixed(2);

            totalEl.innerHTML =
              cost +
              salesTaxi +
              (extraShipping + shipping().chargePerPart) * quantity.value;

            console.log("Habibi", extraShipping + shipping().chargePerPart);
          } else {
            let salesTaxi = 0.05 * pricePerPart.value * quantity.value;
            salesTax.innerHTML = "$ " + salesTaxi;
            console.log("tax", salesTaxi);
            totalEl.innerHTML =
              cost + salesTaxi + shipping().chargePerPart * quantity.value;
          }
          // return salesTaxi.value;
          // console.log(townCode.value);
          // console.log("cost = " + cost.value);
          // console.log("tax = " + salesTaxi);
          break;
        }
        console.log(townCode.value);
      case "MBR": {
        let salesTaxi = 0.05 * pricePerPart.value * quantity.value;
        salesTax.innerHTML = "$ " + salesTaxi;
        totalEl.innerHTML =
          cost + salesTaxi + shipping().chargePerPart * quantity.value;
        // return salesTaxi.value;
        // console.log(townCode.value);
        // console.log("cost = " + cost);
        // console.log("tax = " + salesTaxi);
        break;
      }
      default:
    }
  } else {
    // console.log("costo = " + cost);
    // console.log("taxo = " + salesTax);
    // totalEl.innerHTML =
    //   "$ " + cost + salesTaxi + shipping().chargePerPart * quantity.value;
    // return salesTax.value;

    if (partOrdered().overSizeContainer) {
      let extraShipping = 5;
      shippingEl.innerHTML =
        (extraShipping + shipping().chargePerPart) * quantity.value;

      let salesTaxi = 0;
      salesTax.innerHTML = "$ " + salesTaxi;

      totalEl.innerHTML =
        cost +
        salesTaxi +
        (extraShipping + shipping().chargePerPart) * quantity.value;

      console.log("Habibi", extraShipping + shipping().chargePerPart);
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  // shipping.innerHTML = pricePerPart.value * quantity.value;

  console.log(valid.validate());
  console.log(`ship`, shipping());
  console.log(customerInfo());
  console.log(partOrdered());

  const d = {
    customerInfo: customerInfo(),
    partOrdered: partOrdered(),
    shipping: shipping()
  };

  axios
    .post("/api/post", {
      d
    })
    .then(res => {
      swal({
        title: "Saved Successfully!",
        // text: "You clicked the button!",
        icon: "success",
        button: "OK!"
      });
    });
};

document.getElementById("main-form").addEventListener("submit", e => {
  e.preventDefault();
  test();
});
