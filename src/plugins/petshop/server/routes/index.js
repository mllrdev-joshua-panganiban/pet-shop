module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: 'GET',
    path: '/find',
    handler: 'petshop.find',
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "POST",
    path: "/create",
    handler: "petshop.create",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "petshop.delete",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "PUT",
    path: "/toggle/:id",
    handler: "petshop.toggle",
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: "PUT",
    path: "/update/:id",
    handler: "petshop.update",
    config: {
      policies: [],
      auth: false,
    },
  },
];
