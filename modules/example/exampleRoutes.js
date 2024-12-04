import { destroy, index, store, update } from "./exampleController.js";

export default async function exampleRoutes(fastify, options) {
  fastify.get("/", index);

  fastify.post(
    "/",
    {
      schema: {
        body: {
          type: "object",
          required: ["example"],
          properties: {
            name: {
              type: "string",
              minLength: 1,
              maxLength: 255
            },
          },
        },
      },
    },
    store
  );

  fastify.put("/:id", {
    schema: {
      body: {
        type: "object",
        required: ["example"],
        properties: {
          name: {
            type: "string",
            minLength: 1,
            maxLength: 255
          },
        },
      },
    },
  },update);

  fastify.delete("/:id", destroy);
}
