
exports.up = function(knex) {
    return knex.schema.createTable('answers', tbl => {
        tbl.increments();
        
        tbl.integer('a_choice_id')
        .unique();
        tbl.string('a_choice', 500)
        .notNullable()
        .unique();
        
        tbl.integer('b_choice_id')
        .unique();
        tbl.string('b_choice', 500)
        .notNullable()
        .unique();
        
        tbl.integer('c_choice_id')
        .unique();
        tbl.string('c_choice', 500)
        .unique();
        
        tbl.integer('d_choice_id')
        .unique();
        tbl.string('d_choice', 500)
        .unique();
        
        tbl.integer('e_choice_id')
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
