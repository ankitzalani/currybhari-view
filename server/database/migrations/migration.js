exports.up = function (knex) {
  return knex.schema
    .createTable('Brand', function (table) {
      table.increments('id').primary();
      table.integer('parentId').unsigned().references('id').inTable('Brand');
      table.string('firstName');
      table.string('lastName');
      table.integer('age');
      table.json('address');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('Brand');
};
