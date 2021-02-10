const createSchema = async (knex) => {
  if (await knex.schema.hasTable('magnetometer')) {
    return;
  }

  await knex.schema.createTable('magnetometer', (table) => {
    table.increments('id').primary();
    table.dateTime('datetime').defaultTo(knex.fn.now()).notNullable();
    table.double('magnetometerx').notNullable();
    table.double('magnetometery').notNullable();
    table.double('magnetometerz').notNullable();
    table.double('totaalmagnetometer').notNullable();
    table.double('sqm-value').notNullable();
  });
};

module.exports = {
  createSchema,
};
