const express = require("express");
const router = express.Router();

const {
  addDelivery,
  addAllDelivery,
  getAllDelivery,
  getShowingDelivery,
  getDeliveryById,
  updateDelivery,
  updateManyDelivery,
  updateEnabledStatus,
  deleteDelivery,
  deleteManyDelivery,
} = require("../controller/deliveryController");

//add a addDelivery
router.post("/add", addDelivery);

//add all Delivery
router.post("/add/all", addAllDelivery);

//get only showing Delivery
router.get("/show", getShowingDelivery);

//get all Delivery
router.get("/", getAllDelivery);

//get a Delivery
router.get("/:id", getDeliveryById);

//update a Delivery
router.put("/:id", updateDelivery);

// update many Delivery
router.patch("/update/many", updateManyDelivery);

//delete many product
router.patch("/delete/many", deleteManyDelivery);

//delete a Delivery
router.delete("/:id", deleteDelivery);

// show/hide a Delivery
router.put("/status/enabled/:id", updateEnabledStatus);

//delete a Delivery
router.delete("/:id", deleteDelivery);

module.exports = router;
