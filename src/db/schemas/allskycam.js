const createSchema = async (knex) => {
  if (await knex.schema.hasTable('allskycam')) {
    return;
  }

  await knex.schema.createTable('allskycam', (table) => {
    table.increments('id').primary();
    table.dateTime('datetime').defaultTo(knex.fn.now()).notNullable();
    table.double('allskyvalue').notNullable();
  });
};

module.exports = {
  createSchema,
};
