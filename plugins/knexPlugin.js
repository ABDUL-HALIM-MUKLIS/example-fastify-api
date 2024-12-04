import knex from '../config/knex.js';

export default async function (fastify) {
  fastify.decorate('knex', knex);
}
