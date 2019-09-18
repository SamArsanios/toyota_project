const express = require("express");
const pasrser = require("body-parser");
const morgan = require("morgan");
const sqlconnect = require("mysql");

const app = express();
var html_dir = "./public/";

app.use(express.static("./public"));
app.use(morgan("short"));
app.use(pasrser.json());

app.listen(1000);
console.log("Running 1000");

const connection = sqlconnect.createConnection({
  host: "localhost",
  user: "root",
  database: "glitch_db",
  password: ""
});
////////////////////////////////////////////////////////////////////////

//route to serve the static HTML files
app.get("/", function(req, res) {
  res.sendfile(html_dir + "toyotasam.html");
});

////////////////////////////////////////////////////////////////////////
app.post("/api/post", (req, res) => {
  // const customerid = req.bod.customerid;
  // const customername = req.body.customername;

  let obj = new Object();
  obj = req.body;
  console.log(`post`, obj.d.customerInfo);

  const ci = obj.d.customerInfo;
  const po = obj.d.partOrdered;
  const ship = obj.d.shipping;

  console.log(`ci`, ci);
  let data = {
    customer_id: req.body.customerid,
    customer_name: req.body.customername
  };

  let sql = `INSERT INTO toyota
   (customer_id,customer_name,town_code, retail_customer, part_number, 
    description, price_per_part, quantity, oversize_container, shipping_method, shipping)
     values
     (?,?,?,
      ?,?,?,?,
      ?,?,?,?)`;

  // return;
  connection.query(
    sql,
    [
      ci.id,
      ci.name,
      ci.townCode,
      ci.retailCustomer,
      po.partNumber,
      po.description,
      po.pricePerPart,
      po.quantity,
      po.overSizeContainer,
      ship.shippingMethod,
      ship.chargePerPart
    ],
    (err, results) => {
      if (err) throw err;
      // res.redirect("/");
    }
  );

  // let queryString =
  //   "insert into toyota(customer_id,customer_name) values (?,?)";

  // connection.query(queryString, [customerid, customername]);
  connection.end();

  // console.log("got yo form " + customer_id);
  res.end();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const customerInfoCaller = require("./controller/CustomerInfoController");
// const shippingInforCaller = require("./controller/ShippingController");
// const partOrderedInfoCaller = require("./controller/PartOrderedController");
// const outputInfoCaller = require("./controller/OutputController");

// const customerObject = {
//   id: 1,
//   name: "Ragea",
//   towncode: "Har",
//   retailcustomer: false
// };

// const shippingObject = {
//   shipping: 7,
//   chargeperpart: 2
// };

// const partOrderedObject = {
//   partnumber: 12,
//   description: "Oil Filter",
//   priceperpart: 7,
//   quantity: 2,
//   oversizecontainer: true
// };

// const outputObject = {
//   cost: newPartOrdered.getPricePerPart() * newPartOrdered.getQuantity(),
//   salestax:
//     0.1 * newPartOrdered.getPricePerPart() * newPartOrdered.getQuantity(),
//   shippingandhandling:
//     newShipping.getChargePerPart() * newPartOrdered.getQuantity(),
//   total: 10
// };

// const total =
//   outputObject.cost + outputObject.salestax + outputObject.shippingandhandling;

// const newCust = customerInfoCaller.CustomerInfoController.getCustomerInfo(
//   customerObject
// );

// const newShipping = shippingInforCaller.ShippingController.getShipping(
//   shippingObject
// );

// const newPartOrdered = partOrderedInfoCaller.PartOrderedController.getPartOrdered(
//   partOrderedObject
// );

// const newOutput = outputInfoCaller.OutputController.getOutput(outputObject);

// console.log(newCust);
// console.log(newShipping);
// console.log(newPartOrdered);
// console.log(newOutput);
