const createSchema = async (knex) => {
  if (await knex.schema.hasTable('temperatuur')) {
    return;
  }

  await knex.schema.createTable('temperatuur', (table) => {
    table.increments('id').primary();
    table.dateTime('datetime').defaultTo(knex.fn.now()).notNullable();
    table.double('tempvalue'); // .notNullable();
    table.double('intempvalue');
    table.double('tempgevoel').defaultTo(null);
    table.double('dauwpunt'); // .notNullable();
  });
};

module.exports = {
  createSchema,
};
