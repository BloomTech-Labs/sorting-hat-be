
exports.up = function(knex) {
    return knex.schema.createTable('answers', tbl => {
        tbl.increments();
          
        tbl.string('a-choice', 500)
            .notNullable()
            .unique();
  
        tbl.string('b-choice', 500)
            .notNullable()
            .unique();
  
        tbl.string('c-choice', 500)
            .unique();
  
        tbl.string('d-choice', 500)
            .unique();
  
        tbl.string('e-choice', 500)
            .unique();

      // Foreign Keys
        tbl.integer('question_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('questions')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('answers');
};
