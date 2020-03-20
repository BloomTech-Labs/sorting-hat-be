
exports.up = function(knex) {
    return knex.schema.createTable('answers', tbl => {
        tbl.increments();
        
        tbl.string('choice', 500)
        .notNullable();

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
