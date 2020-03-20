
exports.up = function(knex) {
    return knex.schema.createTable('answers', tbl => {
        tbl.increments();
          
        tbl.string('a_choice', 500)
            .notNullable()
            .unique();
  
        tbl.string('b_choice', 500)
            .notNullable()
            .unique();
  
        tbl.string('c_choice', 500)
            .unique();
  
        tbl.string('d_choice', 500)
            .unique();
  
        tbl.string('e_choice', 500)
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
