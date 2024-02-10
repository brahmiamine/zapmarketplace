import requests from "./httpService";

const OrderServices = {
  getAllOrders: async ({
    body,
    headers,
    customerName,
    status,
    page = 1,
    limit = 8,
    day,
    // source,
    method,
    startDate,
    endDate,
    // download = "",
  }) => {
    const searchName = customerName !== null ? customerName : "";
    const searchStatus = status !== null ? status : "";
    const searchDay = day !== null ? day : "";
    // const searchSource = source !== null ? source : "";
    const searchMethod = method !== null ? method : "";
    const startD = startDate !== null ? startDate : "";
    const endD = endDate !== null ? endDate : "";

    return requests.get(
      `/orders?customerName=${searchName}&status=${searchStatus}&day=${searchDay}&page=${page}&limit=${limit}&startDate=${startD}&endDate=${endD}&method=${searchMethod}`,
      body,
      headers
    );
  },

  getAllOrdersTwo: async ({ invoice, body, headers }) => {
    const searchInvoice = invoice !== null ? invoice : "";
    return requests.get(`/orders/all?invoice=${searchInvoice}`, body, headers);
  },

  getRecentOrders: async ({ page = 1, limit = 8, startDate = "1:00", endDate = "23:59" }) => {
    return requests.get(`/orders/recent?page=${page}&limit=${limit}&startDate=${startDate}&endDate=${endDate}`);
  },

  getOrderCustomer: async (id, body) => {
    return requests.get(`/orders/customer/${id}`, body);
  },
  getOrderStaff: async (code, body) => {
    console.log(code);
    return requests.get(`/orders/staff/${code}`, body);
  },

  getOrderById: async (id, body) => {
    return requests.get(`/orders/${id}`, body);
  },

  updateOrder: async (id, body, headers) => {
    return requests.put(`/orders/${id}`, body, headers);
  },

  deleteOrder: async (id) => {
    return requests.delete(`/orders/${id}`);
  },

  getDashboardOrdersData: async ({ page = 1, limit = 8, endDate = "23:59" }) => {
    return requests.get(`/orders/dashboard?page=${page}&limit=${limit}&endDate=${endDate}`);
  },

  getDashboardAmount: async (code) => {
    let url = "/orders/dashboard-amount";
    if (code) {
      url += `?code=${code}`;
    }
    return requests.get(url);
  },

  getDashboardCount: async (code) => {
    let url = "/orders/dashboard-count";
    if (code) {
      url += `?code=${code}`;
    }
    return requests.get(url);
  },

  getDashboardRecentOrder: async ({ page = 1, limit = 8, code }) => {
    let url = `/orders/dashboard-recent-order?page=${page}&limit=${limit}`;
    if (code) {
      url += `&code=${code}`;
    }
    return requests.get(url);
  },

  getBestSellerProductChart: async () => {
    return requests.get("/orders/best-seller/chart");
  },
};

export default OrderServices;
