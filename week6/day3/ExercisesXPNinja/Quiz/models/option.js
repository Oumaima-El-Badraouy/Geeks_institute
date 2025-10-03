const db = require('../config/database'); // knex instance
const Option = {
  findAll: () => db('options').select('*'),

  findById: (id) => db('options').where({ id }).first(),

  create: (data) => db('options')
    .insert(data)
    .returning('*'), // PostgreSQL

  update: (id, data) => db('options')
    .where({ id })
    .update(data)
    .returning('*'),

  delete: (id) => db('options')
    .where({ id })
    .del()
};
module.exports = Option;
