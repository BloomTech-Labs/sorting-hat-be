
exports.up = function(knex) {
    return knex.schema.createTable('questions', tbl => {
        tbl.increments();
  
        tbl
          .string('question', 1000)
          .notNullable()
          .unique()
          .index();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('questions');
};
