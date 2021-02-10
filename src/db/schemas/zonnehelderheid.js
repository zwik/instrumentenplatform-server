const createSchema = async (knex) => {
  if (await knex.schema.hasTable('zonnehelderheid')) {
    return;
  }

  await knex.schema.createTable('zonnehelderheid', (table) => {
    table.increments('id').primary();
    table.dateTime('datetime').defaultTo(knex.fn.now()).notNullable();
    table.double('zonvalue').notNullable();
    table.double('zonhelderheid').notNullable();
  });
};

module.exports = {
  createSchema,
};
