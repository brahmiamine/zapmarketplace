import requests from "./httpServices";

const DeliveryServices = {
  getAllDelivery: async () => {
    return requests.get("/delivery/show");
  },
};

export default DeliveryServices;
