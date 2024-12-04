import knex from "../../config/knex.js";

export async function getExample() {
  const data = await knex('example').select('*');
  return data
}

export async function getExampleById(id) {
  const data = await knex('example').select('*').where('id', id).first();
  return data
}

export async function saveExample(data) {
  const id = await knex('example').returning('id').insert(data);
  return id
}

export async function updateExample(id, data) {
  return await knex('example').where('id', id).update(data);
}

export async function deleteExample(id) {
  return await knex('example').where('id', id).delete();
}