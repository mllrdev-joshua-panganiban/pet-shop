'use strict';

/**
 * petname router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::petname.petname');
