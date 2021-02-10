const createSchema = async (knex) => {
  if (await knex.schema.hasTable('meteoren')) {
    return;
  }

  await knex.schema.createTable('meteoren', (table) => {
    table.increments('id').primary();
    table.dateTime('datetime').defaultTo(knex.fn.now()).notNullable();
    table.double('meteorenaantal').notNullable();
  });
};

module.exports = {
  createSchema,
};
