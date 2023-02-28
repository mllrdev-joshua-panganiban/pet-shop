import { request } from "@strapi/helper-plugin";

const petshopRequests = {
  getAllOwner: async () => {
    return await request('/petshop/find?populate=pets', {
      method: "GET",
    });
  },

  addOwner: async (data) => {
    return await request(`/petshop/create`, {
      method: "POST",
      body: { data: data },
    });
  },

  toggleOwner: async (id) => {
    return await request(`/petshop/toggle/${id}`, {
      method: "PUT",
    });
  },

  editOwner: async (id, data) => {
    return await request(`/petshop/update/${id}`, {
      method: "PUT",
      body: { data: data },
    });
  },

  deleteOwner: async (id) => {
    return await request(`/petshop/delete/${id}`, {
      method: "DELETE",
    });
  },
};

export default petshopRequests;
