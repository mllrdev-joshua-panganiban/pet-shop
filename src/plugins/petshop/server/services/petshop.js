'use strict';

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.entityService.findMany('plugin::petshop.owner', query);
  },

  async delete(id) {
    return await strapi.entityService.delete("plugin::petshop.owner", id);
  },

  async create(data) {
    return await strapi.entityService.create("plugin::petshop.owner", data);
  },

  async update(id, data) {
    return await strapi.entityService.update("plugin::petshop.owner", id, data);
  },

  async toggle(id) {
    const result = await strapi.entityService.findOne("plugin::petshop.owner", id);
    return await strapi.entityService.update("plugin::petshop.owner", id, {
      data: { isDone: !result.isDone },
    });
  },
});
