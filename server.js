import dotenv from 'dotenv';
dotenv.config();

import Fastify from 'fastify'
import exampleRoutes from './modules/example/exampleRoutes.js'
import knexPlugin from './plugins/knexPlugin.js';

const fastify = Fastify({
  logger: true
})

fastify.register(knexPlugin)

fastify.register(exampleRoutes, { prefix: '/api/example' })

// Run the server!
const startServer = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
};

startServer(); // Call the async function to start the server
