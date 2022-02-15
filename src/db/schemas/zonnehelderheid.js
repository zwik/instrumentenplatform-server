const createSchema = async (knex) => {
  if (await knex.schema.hasTable('zonnehelderheid')) {
    return;
  }

  await knex.schema.createTable('zonnehelderheid', (table) => {
    table.increments('id').primary();
    table.dateTime('datetime').defaultTo(knex.fn.now()).notNullable();
    table.double('radiatie');
    table.double('uvindex');
  });
};

module.exports = {
  createSchema,
};
