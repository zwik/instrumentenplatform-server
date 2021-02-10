const createSchema = async (knex) => {
  if (await knex.schema.hasTable('neerslag')) {
    return;
  }

  await knex.schema.createTable('neerslag', (table) => {
    table.increments('id').primary();
    table.dateTime('datetime').defaultTo(knex.fn.now()).notNullable();
    table.double('neerslagvalue').notNullable();
  });
};

module.exports = {
  createSchema,
};
