'use strict';

/**
 * petname service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::petname.petname');
