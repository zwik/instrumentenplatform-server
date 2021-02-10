const createSchema = async (knex) => {
  if (await knex.schema.hasTable('satelietkaartnl')) {
    return;
  }

  await knex.schema.createTable('satelietkaartnl', (table) => {
    table.increments('id').primary();
    table.dateTime('datetime').defaultTo(knex.fn.now()).notNullable();
    table.string('satelietkaartvalue').notNullable();
  });
};

module.exports = {
  createSchema,
};
