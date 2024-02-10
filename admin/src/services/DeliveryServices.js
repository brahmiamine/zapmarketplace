import requests from "./httpService";

const DeliveryServices = {
  getAllDelivery: async () => {
    return requests.get("/delivery");
  },

  getShowingDelivery: async () => {
    return requests.get("/delivery/show");
  },

  getDeliveryById: async (id) => {
    return requests.get(`/delivery/${id}`);
  },

  addDelivery: async (body) => {
    return requests.post("/delivery/add", body);
  },

  addAllDelivery: async (body) => {
    return requests.post("/delivery/add/all", body);
  },

  updateDelivery: async (id, body) => {
    return requests.put(`/delivery/${id}`, body);
  },

  updateManyCurrencies: async (body) => {
    return requests.patch("delivery/update/many", body);
  },

  updateEnabledStatus: async (id, body) => {
    return requests.put(`/delivery/status/enabled/${id}`, body);
  },

  deleteDelivery: async (id, body) => {
    return requests.delete(`/delivery/${id}`, body);
  },

  deleteManyDelivery: async (body) => {
    return requests.patch("/delivery/delete/many", body);
  },
};

export default DeliveryServices;
