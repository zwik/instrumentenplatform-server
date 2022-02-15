const createSchema = async (knex) => {
  if (await knex.schema.hasTable('temperatuur')) {
    return;
  }

  await knex.schema.createTable('temperatuur', (table) => {
    table.increments('id').primary();
    table.dateTime('datetime').defaultTo(knex.fn.now()).notNullable();
    table.double('tempvalue');
    table.double('intempvalue');
    table.double('tempgevoel');
    table.double('dauwpunt');
  });
};

module.exports = {
  createSchema,
};
