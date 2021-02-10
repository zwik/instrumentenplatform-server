const createSchema = async (knex) => {
  if (await knex.schema.hasTable('weersverwachting')) {
    return;
  }

  await knex.schema.createTable('weersverwachting', (table) => {
    table.increments('id').primary();
    table.dateTime('datetime').defaultTo(knex.fn.now()).notNullable();
    table.string('weersvwvalue').notNullable();
  });
};

module.exports = {
  createSchema,
};
