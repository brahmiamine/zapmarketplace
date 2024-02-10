const Delivery = require("../models/Delivery");
const { mongo_connection } = require("../config/db"); // CCDev

const addDelivery = async (req, res) => {
  try {
    const newDelivery = new Delivery(req.body);
    await newDelivery.save();
    res.send({
      message: "Delivery added successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const addAllDelivery = async (req, res) => {
  try {
    await Delivery.insertMany(req.body);
    res.send({ message: "All items added successfully!" });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllDelivery = async (req, res) => {
  try {
    const items = await Delivery.find({});
    res.send(items);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getShowingDelivery = async (req, res) => {
  try {
    const items = await Delivery.find({ status: "show" }).sort({
      _id: -1,
    });
    res.send(items);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getDeliveryById = async (req, res) => {
  try {
    const item = await Delivery.findById(req.params.id);
    res.send(item);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateDelivery = async (req, res) => {
  try {
    const item = await Delivery.findById(req.params.id);
    if (item) {
      item.status = req.body.status;
    }

    await item.save();
    res.send({
      message: "Delivery update successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateManyDelivery = async (req, res) => {
  try {
    await Delivery.updateMany(
      { _id: { $in: req.body.ids } },
      {
        $set: {
          status: req.body.status,
        },
      },
      {
        multi: true,
      }
    );

    res.send({
      message: "items update successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateEnabledStatus = async (req, res) => {
  try {
    const newStatus = req.body.status;

    await Delivery.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status: req.body.status,
        },
      }
    );
    res.status(200).send({
      message: `Delivery ${newStatus === "show" ? "Published" : "Un-Published"} Successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteDelivery = async (req, res) => {
  try {
    await Delivery.deleteOne({ _id: req.params.id });
    res.send({
      message: "Delete Delivery successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteManyDelivery = async (req, res) => {
  try {
    await Delivery.deleteMany({ _id: req.body.ids });
    res.send({
      message: `Delivery Delete Successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
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
};
