'use strict';

/**
 * book-publisher service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-publisher.book-publisher');
