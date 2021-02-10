const createSchema = async (knex) => {
  if (await knex.schema.hasTable('lucht')) {
    return;
  }

  await knex.schema.createTable('lucht', (table) => {
    table.increments('id').primary();
    table.dateTime('datetime').defaultTo(knex.fn.now()).notNullable();
    table.double('luchtvocht').notNullable();
    table.double('luchtdruk').notNullable();
    table.double('windspeed').defaultTo(null);
    table.double('hoogtebewolking').defaultTo(null);
    table.double('fijnstofmeting').defaultTo(null);
    table.string('windrichting').defaultTo(null);
  });
};

module.exports = {
  createSchema,
};
